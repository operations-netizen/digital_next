import Hero from '@/components/home/Hero'
import StatsStrip from '@/components/home/StatsStrip'
import WhoWeAre from '@/components/home/WhoWeAre'
import Portfolio from '@/components/home/Portfolio'
import Philosophy from '@/components/home/Philosophy'
import ClosingThought from '@/components/home/ClosingThought'
import AnimatedDivider from '@/components/ui/AnimatedDivider'

export default function Home() {
  return (
    <>
      <Hero />
      <StatsStrip />
      <AnimatedDivider />
      <WhoWeAre />
      <AnimatedDivider />
      <Portfolio />
      <Philosophy />
      <ClosingThought />
    </>
  )
}
