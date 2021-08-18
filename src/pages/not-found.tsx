import React from "react"
import { Link } from "react-router-dom"

/**
 * About Kasa, its values and its team !
 */
export default function NotFoundPage():JSX.Element {

  return (
    <main className="px-4 xl:mx-auto py-notFoundPage max-w-screen-xl">
      <div className="mx-auto max-w-screen-lg text-center text-primary">
        <h1 className="text-15xl leading-tight font-black">
          404 
        </h1>
        <p className="text-3xl ">
          Oups! La page que vous demandez n'existe pas.
        </p>
        <Link className="block my-28 underline"
          to="/">
            Retourner sur la page d'accueil
        </Link>
      </div>
    </main>
  )
}
