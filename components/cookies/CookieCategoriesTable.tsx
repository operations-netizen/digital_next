import { cookieCategories } from '@/lib/cookies'

/**
 * Cookie categories - a real semantic <table> on wider screens, and a
 * stacked definition-style layout on mobile so it never overflows. Generic
 * examples only (no invented cookie names or vendors).
 */
export default function CookieCategoriesTable() {
  return (
    <div>
      {/* Desktop / tablet - semantic table */}
      <div className="hidden overflow-x-auto sm:block">
        <table className="w-full border-collapse text-left">
          <caption className="sr-only">
            Cookie categories, purposes, examples, and durations
          </caption>
          <thead>
            <tr className="border-b border-line">
              {['Category', 'Purpose', 'Example', 'Duration'].map((h) => (
                <th
                  key={h}
                  scope="col"
                  className="py-4 pr-6 font-mono text-[0.625rem] font-normal uppercase tracking-meta text-muted/60"
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {cookieCategories.map((row) => (
              <tr key={row.category} className="border-b border-line align-top">
                <th
                  scope="row"
                  className="py-5 pr-6 font-serif text-lg font-normal tracking-tight text-ink"
                >
                  {row.category}
                </th>
                <td className="py-5 pr-6 text-[0.9375rem] leading-[1.6] text-muted">
                  {row.purpose}
                </td>
                <td className="py-5 pr-6 text-[0.9375rem] leading-[1.6] text-muted">
                  {row.example}
                </td>
                <td className="py-5 text-[0.9375rem] leading-[1.6] text-muted">
                  {row.duration}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile - stacked rows */}
      <dl className="sm:hidden">
        {cookieCategories.map((row) => (
          <div key={row.category} className="border-t border-line py-6 first:border-t-0 first:pt-0">
            <h3 className="font-serif text-xl tracking-tight text-ink">
              {row.category}
            </h3>
            <div className="mt-3 space-y-2">
              {[
                ['Purpose', row.purpose],
                ['Example', row.example],
                ['Duration', row.duration],
              ].map(([label, value]) => (
                <div key={label} className="grid grid-cols-[7rem_1fr] gap-x-3">
                  <dt className="font-mono text-[0.625rem] uppercase tracking-meta text-muted/50">
                    {label}
                  </dt>
                  <dd className="text-[0.9375rem] leading-[1.55] text-muted">{value}</dd>
                </div>
              ))}
            </div>
          </div>
        ))}
      </dl>
    </div>
  )
}
