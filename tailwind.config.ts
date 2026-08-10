import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    // Declared in full rather than via `extend`: extended screens are
    // appended after the defaults, so an `xs` added there would emit its
    // rules *after* `sm`/`lg` and override them at large sizes.
    screens: {
      xs: '400px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        bg: '#FFFFFF',
        ink: '#111111',
        muted: '#666666',
        line: '#EAEAEA',
        accent: '#4F46FF',
        dark: '#0F1118',
      },
      fontFamily: {
        // Wired to next/font CSS variables in app/layout.tsx
        serif: ['var(--font-serif)', 'Georgia', 'serif'],
        sans: ['var(--font-sans)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'ui-monospace', 'monospace'],
      },
      letterSpacing: {
        tightest: '-0.035em',
        tighter: '-0.02em',
        meta: '0.2em',
      },
      maxWidth: {
        shell: '1440px',
        prose: '68ch',
      },
      transitionTimingFunction: {
        editorial: 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
      keyframes: {
        orbit: {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
        'orbit-reverse': {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(-360deg)' },
        },
        pulse: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.05)' },
        },
      },
      animation: {
        orbit: 'orbit 46s linear infinite',
        'orbit-reverse': 'orbit-reverse 60s linear infinite',
        pulse: 'pulse 4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}

export default config
