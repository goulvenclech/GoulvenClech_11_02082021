import React from "react"
import HeroAbout from "../components/about/hero-about"

/**
 * The homepage of Kasa !
 */
export default function AboutPage():JSX.Element {
  return (
    <main className="px-4 xl:mx-auto max-w-screen-xl">
      <HeroAbout />
    </main>
  )
}
