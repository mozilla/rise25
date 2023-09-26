import { Hero } from './components/hero'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Hero title="Welcome, the next 25 game-changers shaping the future of the internet." />
    </main>
  )
}
