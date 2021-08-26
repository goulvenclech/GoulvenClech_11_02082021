import React from "react"
import { Link } from "react-router-dom"

/**
 * inform that the requested housing didn't exist or have been deleted
 */
export default function MissingHousing():JSX.Element {

  return (
    <main className="px-4 xl:mx-auto py-notFoundPage max-w-screen-xl">
      <div className="mx-auto max-w-screen-lg text-center text-primary">
        <h1 className="text-9xl leading-snug font-black">
          Oups
        </h1>
        <p className="text-3xl ">
          L'annonce recherchée n'existe pas ou a été suprimée !
        </p>
        <Link className="block my-28 underline"
          to="/">
            Retourner sur la page d'accueil
        </Link>
      </div>
    </main>
  )
}