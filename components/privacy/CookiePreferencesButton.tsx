'use client'

/**
 * Opens the cookie-preferences UI. Dispatches a custom event so a consent
 * tool ([COOKIE TOOL]) can be wired up later without changing this markup.
 * Until one is connected the button is inert but keyboard-focusable.
 */
export default function CookiePreferencesButton() {
  return (
    <button
      type="button"
      onClick={() =>
        window.dispatchEvent(new CustomEvent('open-cookie-preferences'))
      }
      className="inline-flex items-center gap-2 text-[17px] text-accent underline decoration-accent/40 underline-offset-4 outline-none transition-colors duration-300 ease-editorial hover:decoration-accent focus-visible:decoration-accent sm:text-[18px]"
    >
      Manage Cookie Preferences
    </button>
  )
}
