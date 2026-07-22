import { NextResponse } from 'next/server'

/**
 * Form submission endpoint for Contact, Careers, and Newsletter.
 *
 * Delivery: if FORMS_WEBHOOK_URL is set, the validated submission is POSTed
 * there as JSON (works with any endpoint - your own API, Zapier/Make, a Slack
 * incoming webhook, etc.). If it is not set, the submission is logged
 * server-side so nothing is lost, and the response reports delivered:false.
 * No secrets are hardcoded; swap the webhook for an email provider later
 * without changing the client forms.
 */

export const runtime = 'nodejs'

type Field = { key: string; required?: boolean; email?: boolean; max?: number }

const SCHEMAS: Record<string, Field[]> = {
  contact: [
    { key: 'name', required: true, max: 200 },
    { key: 'company', max: 200 },
    { key: 'email', required: true, email: true, max: 320 },
    { key: 'reason', required: true, max: 100 },
    { key: 'message', required: true, max: 5000 },
  ],
  careers: [
    { key: 'name', required: true, max: 200 },
    { key: 'email', required: true, email: true, max: 320 },
    { key: 'linkedin', max: 500 },
    { key: 'portfolio', max: 500 },
    { key: 'location', max: 200 },
    { key: 'area', required: true, max: 100 },
    { key: 'company', max: 100 },
    { key: 'intro', max: 5000 },
  ],
  newsletter: [{ key: 'email', required: true, email: true, max: 320 }],
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export async function POST(req: Request) {
  let data: FormData
  try {
    data = await req.formData()
  } catch {
    return NextResponse.json({ ok: false, error: 'Invalid request.' }, { status: 400 })
  }

  const form = String(data.get('form') ?? '')
  const schema = SCHEMAS[form]
  if (!schema) {
    return NextResponse.json({ ok: false, error: 'Unknown form.' }, { status: 400 })
  }

  // Honeypot - silently accept obvious bots without delivering.
  if (String(data.get('company_website') ?? '').trim() !== '') {
    return NextResponse.json({ ok: true, delivered: false })
  }

  const payload: Record<string, string> = {}
  const errors: string[] = []

  for (const f of schema) {
    const value = String(data.get(f.key) ?? '').trim()
    if (f.required && !value) errors.push(f.key)
    else if (value && f.email && !EMAIL_RE.test(value)) errors.push(f.key)
    else if (f.max && value.length > f.max) errors.push(f.key)
    if (value) payload[f.key] = value
  }

  if (errors.length) {
    return NextResponse.json(
      { ok: false, error: 'Please check the highlighted fields.', fields: errors },
      { status: 400 }
    )
  }

  // Resume metadata (careers). Binary storage needs a storage provider; we
  // forward the file's metadata so counsel/ops can wire uploads later.
  const resume = data.get('resume')
  const resumeMeta =
    resume && typeof resume === 'object' && 'name' in resume
      ? { name: (resume as File).name, size: (resume as File).size, type: (resume as File).type }
      : null

  const submission = {
    form,
    ...payload,
    ...(resumeMeta ? { resume: resumeMeta } : {}),
    submittedAt: new Date().toISOString(),
  }

  const webhook = process.env.FORMS_WEBHOOK_URL
  if (!webhook) {
    console.log('[forms] submission (no FORMS_WEBHOOK_URL configured):', submission)
    return NextResponse.json({ ok: true, delivered: false })
  }

  try {
    const res = await fetch(webhook, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(submission),
    })
    if (!res.ok) throw new Error(`Webhook responded ${res.status}`)
    return NextResponse.json({ ok: true, delivered: true })
  } catch (err) {
    console.error('[forms] delivery failed:', err)
    return NextResponse.json(
      { ok: false, error: 'We couldn’t submit right now. Please try again or email us.' },
      { status: 502 }
    )
  }
}
