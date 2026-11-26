/**
 * Column-span helpers so a brand grid's short final row stretches to fill the
 * width instead of leaving empty cells - the brand count can change (it went
 * from six to five) without leaving holes in any grid.
 *
 * Three-across grids are laid out on a 6-track grid: full rows take 2 tracks
 * per item, a final row of 2 takes 3 each, a final row of 1 takes all 6.
 * Two-across card grid: an odd last card is centred at the usual width.
 *
 * Every class is written out literally so Tailwind's scanner emits it.
 */

/** For a grid that is always 3-across (`grid-cols-6`). */
export function span3(i: number, n: number): string {
  const rem = n % 3
  if (!rem || i < n - rem) return 'col-span-2'
  return rem === 2 ? 'col-span-3' : 'col-span-6'
}

/** For `sm:grid-cols-2 lg:grid-cols-6` grids (2-across, then 3-across). */
export function span2then3(i: number, n: number): string {
  const sm = n % 2 === 1 && i === n - 1 ? 'sm:col-span-2' : ''
  const rem = n % 3
  const lg = !rem || i < n - rem ? 'lg:col-span-2' : rem === 2 ? 'lg:col-span-3' : 'lg:col-span-6'
  return `${sm} ${lg}`.trim()
}

/** For the homepage card grid, 2-across from `sm` (`sm:grid-cols-2`, gaps
 *  1.25rem / lg 1.5rem): an odd last card keeps the same width as the others
 *  and sits centred under them, rather than stretching full width. */
export function span2(i: number, n: number): string {
  return n % 2 === 1 && i === n - 1
    ? 'sm:col-span-2 sm:w-[calc((100%-1.25rem)/2)] sm:justify-self-center lg:w-[calc((100%-1.5rem)/2)]'
    : ''
}
