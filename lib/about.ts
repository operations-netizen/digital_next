// About page content. Uses the group's real, established figures where they
// exist (see impactStats / timeline in site.ts) and clearly-marked, editable
// data elsewhere. Nothing here fabricates people, offices, or awards:
// sections whose arrays are empty simply do not render.

import type { ReactNode } from 'react'

// ── Leadership ────────────────────────────────────────────────────────────
// Empty by default - the Leadership section is hidden until real members are
// added. No stock photos: a member without a `photo` renders an initials
// monogram. Fill this in with real people before relying on the section.
export interface LeaderMember {
  name: string
  role: string
  bio: string
  /** Path under /public to a real headshot, or omit for an initials monogram. */
  photo?: string
  linkedin?: string
}

// Portraits are placeholders (initials monogram) until real headshots are
// added - set `photo` on any member to swap in a real image.
export const groupLeadership: LeaderMember[] = [
  {
    name: 'Vaibhav Kakkar',
    role: 'Founder & Group CEO',
    bio: 'Leads the long-term vision of Digital Next, driving strategy, innovation, and sustainable growth across the entire group.',
    photo: '/team/vaibhav-kakkar.png',
  },
  {
    name: 'Raghav Tayal',
    role: 'Group COO',
    bio: 'Oversees group operations, R&D, delivery excellence, and cross-brand execution throughout the Digital Next ecosystem.',
    photo: '/team/raghav-tayal.jpg',
  },
  {
    name: 'Tarun Gogia',
    role: 'Group Director of People Operations',
    bio: 'Leads business strategy, processes, and resource and financial planning, equipping every brand with resources and software.',
    photo: '/team/tarun-gogia.png',
  },
  {
    name: 'Mudassir',
    role: 'Finance & Accounts Head',
    bio: 'Oversees financial planning, governance, reporting, and commercial operations across the Digital Next group.',
    photo: '/team/mudassir.png',
  },
]

export const brandLeadership: LeaderMember[] = [
  {
    name: 'Dawood Bukhari',
    role: 'CEO - Digital Web Solutions',
    bio: 'Leads enterprise digital marketing initiatives with a focus on strategy, client partnerships, and long-term business growth.',
    photo: '/team/dawood-bukhari.png',
  },
  {
    name: 'Sahil Kakkar',
    role: 'CEO - RankWatch',
    bio: 'Leads product vision, engineering, and innovation for RankWatch, building intelligent SEO software used by businesses worldwide.',
    photo: '/team/sahil-kakkar.png',
  },
  {
    name: 'Yulia Aslamova',
    role: 'CEO - CollabX',
    bio: 'Leads brand development, partnerships, AI initiatives, and team growth across CollabX.',
    photo: '/team/yulia-aslamova.png',
  },
  {
    name: 'Abhishek Bazieal',
    role: 'Director & Partner - SmegoWeb (NZ)',
    bio: 'Partners on the New Zealand venture, leading its operations and business growth, and helping SMBs achieve measurable digital success.',
    photo: '/team/abhishek-bazieal.png',
  },
]

// ── Global presence ───────────────────────────────────────────────────────
// Countries the group operates across, per section 7 of the internal Company
// Reference Document (July 2026): Gurugram & Noida (India, primary delivery
// hubs), Newark DE and Anaheim CA (USA), Epping NSW (Australia), and Auckland
// (New Zealand). The document also lists a Manchester office; the UK is
// deliberately excluded from all public-facing copy.
export const locations = [
  'India',
  'United States',
  'Australia',
  'New Zealand',
]

// ── Technology ────────────────────────────────────────────────────────────
// Tools and platforms used across the group (client-provided). Trim to only
// those actually in use before publishing.
/** Platforms used across the group, with what each is used for. */
export const techStack: { name: string; role: string }[] = [
  { name: 'AWS', role: 'Cloud infrastructure' },
  { name: 'Google Cloud', role: 'Cloud & data' },
  { name: 'Cloudflare', role: 'Edge & security' },
  { name: 'OpenAI', role: 'AI models' },
  { name: 'GitHub', role: 'Code & delivery' },
  { name: 'Microsoft', role: 'Workplace' },
  { name: 'HubSpot', role: 'CRM & marketing' },
  { name: 'MongoDB', role: 'Databases' },
]

// ── Life at Digital Next ──────────────────────────────────────────────────
// Intentional placeholders for real photography (no stock imagery). Each
// frame is captioned; swap `image` in when real photos exist.
export interface LifeFrame {
  caption: string
  image?: string
  /** Grid emphasis - 'wide' spans two columns on desktop. */
  span?: 'wide'
}

export const lifeFrames: LifeFrame[] = [
  { caption: 'The studio', span: 'wide' },
  { caption: 'Working sessions' },
  { caption: 'Build days' },
  { caption: 'Launches' },
  { caption: 'Workshops' },
  { caption: 'The whole group', span: 'wide' },
]

// ── Awards ────────────────────────────────────────────────────────────────
// Empty by default - the Awards section is hidden until real recognitions are
// added. Do not invent awards.
export interface Award {
  title: string
  org: string
  year: string
}

export const awards: Award[] = []

// ── Looking ahead ─────────────────────────────────────────────────────────
export const lookingAhead: { lead: string; body: ReactNode }[] = [
  {
    lead: 'More brands, held longer.',
    body: 'We will keep founding and acquiring internet businesses - and keep them well past the point most groups would sell.',
  },
  {
    lead: 'A deeper shared platform.',
    body: 'Every brand inherits more each year: better infrastructure, sharper hiring, and technology that compounds across the group.',
  },
  {
    lead: 'Patient by design.',
    body: 'The next decade is measured in durability and cash flow, not headlines, building the internet brands that are still here in twenty years.',
  },
]
