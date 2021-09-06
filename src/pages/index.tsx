import React from "react"
import HousingSection from "../components/index/housing-section"
import HeroIndex from "../components/index/hero-index"

/**
 * Home page of Kasa, with the company slogan and a masonry diplaying all the housing available ! 
 * See documentation => https://github.com/GoulvenC/GoulvenClech_11_02082021/wiki/Page-Index
 */
export default function IndexPage():JSX.Element {
  return (
    <main className="px-4 xl:mx-auto max-w-screen-xl">
      <HeroIndex />
      <HousingSection />
    </main>
  )
}
