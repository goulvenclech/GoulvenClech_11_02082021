import React from "react"
import HousingSection from "../components/index/housing-section"
import HeroIndex from "../components/index/hero-index"

/**
 * The homepage of Kasa !
 */
export default function IndexPage():JSX.Element {
  return (
    <main className="mx-4 xl:mx-auto max-w-screen-xl ">
      <HeroIndex />
      <HousingSection />
    </main>
  )
}
