'use client'

import { useEffect, useId, useRef, useState } from 'react'

/**
 * Custom select for the dark form panels.
 *
 * A native <select> renders its popup as browser/OS chrome - `color-scheme`
 * is the only lever, and it still can't carry the accent, the hairlines, or
 * the type scale. This is the APG "select-only combobox" pattern instead:
 * a button labelled by the field label, a listbox popup, and roving
 * `aria-activedescendant` so focus never leaves the button.
 *
 * The value posts through a hidden input, so the parent <form> keeps working
 * with plain FormData. Hidden inputs are barred from constraint validation,
 * so a required field must be checked by the parent on submit.
 */

interface SelectFieldProps {
  /** Field name as submitted in FormData. */
  name: string
  /** Visible label, rendered above the control. */
  label: string
  options: readonly string[]
  /** Shown until the user picks - omit for a pre-selected field. */
  placeholder?: string
  defaultValue?: string
  /** Marks the control required for assistive tech. The parent form still
   *  has to enforce it on submit - see the note above. */
  required?: boolean
}

export default function SelectField({
  name,
  label,
  options,
  placeholder,
  defaultValue = '',
  required,
}: SelectFieldProps) {
  const [value, setValue] = useState(defaultValue)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState(0)

  const rootRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)
  const listRef = useRef<HTMLUListElement>(null)
  // Type-ahead buffer: successive keystrokes within a second compose a query.
  const typeAhead = useRef({ query: '', at: 0 })

  const uid = useId()
  const labelId = `${uid}-label`
  const listId = `${uid}-list`
  const optionId = (i: number) => `${uid}-opt-${i}`

  function openList() {
    const i = options.indexOf(value)
    setActive(i >= 0 ? i : 0)
    setOpen(true)
  }

  function closeList({ refocus = true } = {}) {
    setOpen(false)
    if (refocus) buttonRef.current?.focus()
  }

  function choose(i: number) {
    const next = options[i]
    if (next === undefined) return
    setValue(next)
    closeList()
  }

  // Close when the pointer lands anywhere outside the field.
  useEffect(() => {
    if (!open) return
    function onPointerDown(e: PointerEvent) {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('pointerdown', onPointerDown)
    return () => document.removeEventListener('pointerdown', onPointerDown)
  }, [open])

  // Keep the active option in view while arrowing through a scrolled list.
  useEffect(() => {
    if (!open) return
    listRef.current
      ?.querySelector<HTMLLIElement>(`#${CSS.escape(optionId(active))}`)
      ?.scrollIntoView({ block: 'nearest' })
    // optionId is derived from uid, which is stable for the component's life.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active, open])

  function onKeyDown(e: React.KeyboardEvent) {
    const last = options.length - 1

    if (!open) {
      if (['Enter', ' ', 'ArrowDown', 'ArrowUp'].includes(e.key)) {
        e.preventDefault()
        openList()
      }
      return
    }

    switch (e.key) {
      case 'Escape':
        e.preventDefault()
        closeList()
        return
      case 'Tab':
        // Let focus move on, but don't leave an orphaned popup behind.
        setOpen(false)
        return
      case 'Enter':
      case ' ':
        e.preventDefault()
        choose(active)
        return
      case 'ArrowDown':
        e.preventDefault()
        setActive((i) => (i >= last ? 0 : i + 1))
        return
      case 'ArrowUp':
        e.preventDefault()
        setActive((i) => (i <= 0 ? last : i - 1))
        return
      case 'Home':
        e.preventDefault()
        setActive(0)
        return
      case 'End':
        e.preventDefault()
        setActive(last)
        return
    }

    // Type-ahead - single printable characters only.
    if (e.key.length === 1 && !e.metaKey && !e.ctrlKey && !e.altKey) {
      const now = Date.now()
      const buffer = typeAhead.current
      buffer.query = now - buffer.at > 1000 ? e.key : buffer.query + e.key
      buffer.at = now

      const q = buffer.query.toLowerCase()
      const hit = options.findIndex((o) => o.toLowerCase().startsWith(q))
      if (hit >= 0) {
        e.preventDefault()
        setActive(hit)
      }
    }
  }

  return (
    <div className="block" ref={rootRef}>
      <span
        id={labelId}
        className="font-mono text-[10px] uppercase tracking-meta text-white/45"
      >
        {label}
      </span>

      <input type="hidden" name={name} value={value} />

      <div className="relative mt-2">
        <button
          ref={buttonRef}
          type="button"
          role="combobox"
          aria-haspopup="listbox"
          aria-expanded={open}
          aria-controls={listId}
          aria-labelledby={labelId}
          aria-required={required || undefined}
          aria-activedescendant={open ? optionId(active) : undefined}
          onClick={() => (open ? closeList({ refocus: false }) : openList())}
          onKeyDown={onKeyDown}
          className={[
            'flex w-full items-center justify-between gap-4 border-b bg-transparent py-2.5 text-left text-[15px] outline-none transition-colors duration-[500ms] ease-editorial',
            open ? 'border-accent' : 'border-white/20 hover:border-white/35',
            'focus-visible:border-accent',
          ].join(' ')}
        >
          <span className={value ? 'text-white' : 'text-white/35'}>
            {value || placeholder}
          </span>
          <svg
            viewBox="0 0 10 6"
            aria-hidden="true"
            className={[
              'h-1.5 w-2.5 shrink-0 transition-[transform,stroke] duration-[400ms] ease-editorial',
              open ? 'rotate-180 stroke-accent' : 'stroke-white/40',
            ].join(' ')}
            fill="none"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M1 1l4 4 4-4" />
          </svg>
        </button>

        {open && (
          <ul
            ref={listRef}
            id={listId}
            role="listbox"
            aria-labelledby={labelId}
            className="absolute left-0 right-0 top-[calc(100%+10px)] z-30 max-h-64 overflow-y-auto border border-white/12 bg-[#14161C] py-1.5 shadow-[0_28px_70px_-28px_rgba(0,0,0,0.95)] [&::-webkit-scrollbar-thumb]:bg-white/15 [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar]:bg-transparent"
          >
            {options.map((o, i) => {
              const isActive = i === active
              const isSelected = o === value
              return (
                <li
                  key={o}
                  id={optionId(i)}
                  role="option"
                  aria-selected={isSelected}
                  onMouseEnter={() => setActive(i)}
                  onClick={() => choose(i)}
                  className={[
                    'relative cursor-pointer px-4 py-2.5 pl-5 text-[15px] transition-colors duration-200',
                    isActive ? 'bg-white/[0.055]' : '',
                    isSelected
                      ? 'text-accent'
                      : isActive
                        ? 'text-white'
                        : 'text-white/70',
                  ].join(' ')}
                >
                  {/* Accent tick on the active row - the one moving marker,
                      so the list reads as a rail rather than a stack of
                      highlighted blocks. */}
                  <span
                    aria-hidden="true"
                    className={[
                      'absolute left-0 top-1/2 h-4 w-px -translate-y-1/2 bg-accent transition-opacity duration-200',
                      isActive ? 'opacity-100' : 'opacity-0',
                    ].join(' ')}
                  />
                  {o}
                </li>
              )
            })}
          </ul>
        )}
      </div>
    </div>
  )
}
