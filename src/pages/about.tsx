import React from "react"
import HeroAbout from "../components/about/hero-about"
import Accordion from "../components/accordion"

/**
 * About Kasa, its values and its team !
 * See documentation => https://github.com/GoulvenC/GoulvenClech_11_02082021/wiki/Page-About
 * 
 */
export default function AboutPage():JSX.Element {

  /**
   * Without backend, I have to hard write the content of this section
   * it'll be better to change that later for a real backend.
   */
  const fiabiliteContent = `Les annonces postées sur Kasa garantissent une fiabilité totale. 
    Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées 
    par nos équipes.`
  const respectContent = `La bienveillance fait partie des valeurs fondatrices de Kasa. Tout 
    comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre 
    plateforme.`
  const serviceContent = `Nos équipes se tiennent à votre disposition pour vous fournir une 
    expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.`
  const responsabiliteContent = `La sécurité est la priorité de Kasa. Aussi bien pour nos 
    hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos 
    services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de 
    vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité 
    domestique pour nos hôtes.`


  return (
    <main className="px-4 xl:mx-auto max-w-screen-xl">
      <HeroAbout />
      <div className="mx-auto max-w-screen-lg">
      <Accordion title="Fiabilité" content={fiabiliteContent} />
      <Accordion title="Respect" content={respectContent} />
      <Accordion title="Service" content={serviceContent} />
      <Accordion title="Responsabilité" content={responsabiliteContent} />
      </div>
    </main>
  )
}
