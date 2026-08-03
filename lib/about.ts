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
    bio: 'Oversees operations, technology, delivery excellence, and cross-company execution throughout the Digital Next ecosystem.',
    photo: '/team/raghav-tayal.jpg',
  },
  {
    name: 'Tarun Gogia',
    role: 'Group Director of People Operations',
    bio: 'Builds the culture, leadership, talent strategy, and people systems that empower every Digital Next brand.',
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
    role: 'CEO - DWS Signature',
    bio: 'Leads enterprise digital marketing initiatives with a focus on strategy, client partnerships, and long-term business growth.',
    photo: '/team/dawood-bukhari.png',
  },
  {
    name: 'Marc Bishop',
    role: 'Director - Wytlabs',
    bio: 'Drives growth strategy and performance marketing initiatives for clients across the United States.',
    photo: '/team/marc-bishop.png',
  },
  {
    name: 'Harshit Gupta',
    role: 'Director of Operations & Marketing - Wytlabs',
    bio: 'Leads operational excellence and marketing execution while scaling client success across the organization.',
    photo: '/team/harshit-gupta.png',
  },
  {
    name: 'Sahil Kakkar',
    role: 'CEO - RankWatch',
    bio: 'Leads product vision, engineering, and innovation for RankWatch, building intelligent SEO software used by businesses worldwide.',
    photo: '/team/sahil-kakkar.png',
  },
  {
    name: 'Yulia Aslamova',
    role: 'Director - CollabX',
    bio: 'Leads brand development, partnerships, AI initiatives, and team growth across CollabX.',
    photo: '/team/yulia-aslamova.png',
  },
  {
    name: 'Abhishek Bazieal',
    role: 'Director - Smegoweb',
    bio: 'Heads operations and business growth across Australia and New Zealand, helping SMBs achieve measurable digital success.',
    photo: '/team/abhishek-bazieal.png',
  },
]

// ── Global presence ───────────────────────────────────────────────────────
// Countries the group operates across (client-provided). Verify before
// publishing. Digital Next is remote-first; these are where people are based.
export const locations = [
  'India',
  'United States',
  'Australia',
  'New Zealand',
]

// ── Technology ────────────────────────────────────────────────────────────
// Tools and platforms used across the group (client-provided). Trim to only
// those actually in use before publishing.
export const techStack = [
  'AWS',
  'Google Cloud',
  'Cloudflare',
  'OpenAI',
  'GitHub',
  'Microsoft',
  'HubSpot',
  'MongoDB',
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
