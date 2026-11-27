/**
 * Layout helpers so the brand grids handle any brand count (it went from six
 * to five) without holes or stretched cells: a short final row keeps the
 * normal cell width and sits centred.
 *
 * Centring needs a finer track grid than the visible column count - a 3-across
 * grid is laid out on 6 tracks (cells span 2) and a 2-across grid on 4 tracks
 * (cells span 2) - so a centred row can start half a cell in.
 *
 * Because a centred row leaves empty space at its sides, each cell draws its
 * own hairlines (right + bottom always; left when it starts a row; top when
 * it is in the first row) instead of relying on a border around the grid.
 *
 * Every class is written out literally so Tailwind's scanner emits it.
 */

/** Cell classes for an always-3-across grid (`grid grid-cols-6`, no border). */
export function cell3(i: number, n: number): string {
  const rem = n % 3
  const lastRowStart = n - rem
  const inLastRow = rem > 0 && i >= lastRowStart
  const startsRow = inLastRow ? i === lastRowStart : i % 3 === 0
  return [
    'col-span-2 border-b border-r',
    inLastRow && i === lastRowStart ? (rem === 2 ? 'col-start-2' : 'col-start-3') : '',
    startsRow ? 'border-l' : '',
    i < 3 ? 'border-t' : '',
  ].join(' ')
}

/**
 * Cell classes for a grid that is 1-across on phones, 2-across from `sm`
 * (`sm:grid-cols-4`) and 3-across from `lg` (`lg:grid-cols-6`), no border.
 */
export function cell2then3(i: number, n: number): string {
  // phones: a single stacked column
  const base = ['border-x border-b', i === 0 ? 'border-t' : '']
  // sm: 2 across on 4 tracks; an odd last cell is centred
  const smCentred = n % 2 === 1 && i === n - 1
  const sm = [
    'sm:col-span-2 sm:border-r',
    smCentred ? 'sm:col-start-2' : '',
    i % 2 === 0 ? 'sm:border-l' : 'sm:border-l-0',
    i < 2 ? 'sm:border-t' : 'sm:border-t-0',
  ]
  // lg: 3 across on 6 tracks; a short last row is centred
  const rem = n % 3
  const lastRowStart = n - rem
  const inLastRow = rem > 0 && i >= lastRowStart
  const startsRow = inLastRow ? i === lastRowStart : i % 3 === 0
  const lg = [
    inLastRow && i === lastRowStart ? (rem === 2 ? 'lg:col-start-2' : 'lg:col-start-3') : 'lg:col-start-auto',
    startsRow ? 'lg:border-l' : 'lg:border-l-0',
    i < 3 ? 'lg:border-t' : 'lg:border-t-0',
  ]
  return [...base, ...sm, ...lg].filter(Boolean).join(' ')
}

/** For the homepage card grid, 2-across from `sm` (`sm:grid-cols-2`, gaps
 *  1.25rem / lg 1.5rem): an odd last card keeps the same width as the others
 *  and sits centred under them, rather than stretching full width. */
export function span2(i: number, n: number): string {
  return n % 2 === 1 && i === n - 1
    ? 'sm:col-span-2 sm:w-[calc((100%-1.25rem)/2)] sm:justify-self-center lg:w-[calc((100%-1.5rem)/2)]'
    : ''
}
