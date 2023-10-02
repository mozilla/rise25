'use client';

import { Hero } from './components/hero'
import { Winners } from './components/winners'
import { useScene } from './context/scene-context';

export default function Home() {
  const { scene } = useScene();

  return (
    <main className="flex min-h-[80vh] flex-col items-center justify-center">
      <Hero enabled={scene === 1} title="Welcome, the next 25 game-changers shaping the future of the internet." />
      <Winners enabled={scene === 2} />
    </main>
  )
}
