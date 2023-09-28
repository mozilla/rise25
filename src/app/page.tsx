import { Hero } from './components/hero'
import { Winners } from './components/winners'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Hero title="Welcome, the next 25 game-changers shaping the future of the internet." />
      <Winners />
    </main>
  )
}
