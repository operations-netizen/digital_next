import Eyebrow from '@/components/ui/Eyebrow'
import Button from '@/components/ui/Button'

/** Temporary page shell for routes not yet built. */
export default function RoutePlaceholder({
  index,
  title,
  note,
}: {
  index: string
  title: string
  note: string
}) {
  return (
    <section className="shell flex min-h-screen flex-col justify-center py-40">
      <Eyebrow>{index} - In progress</Eyebrow>
      <h1 className="display mt-7 text-hero">{title}</h1>
      <p className="mt-8 max-w-md text-lg leading-relaxed text-muted">{note}</p>
      <div className="mt-10">
        <Button href="/" variant="ghost">
          Back to home
        </Button>
      </div>
    </section>
  )
}
