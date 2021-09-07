import React, { useEffect } from "react"
import { Link } from "react-router-dom"
import imgUrl from "../../assets/images/logo_rose.svg"

/**
 * The header displayed in all the application
 */
export default function Header():JSX.Element {
    return (
        <header className="flex flex-row gap-8 items-center max-w-screen-xl  
                h-16 md:h-24 px-4 mx-auto py-4 text-xl md:text-2xl whitespace-nowrap">
            <Link to="/" className="mr-auto my-2">
                <img className="mx-auto h-8 md:h-16" src={imgUrl}>
                </img>
            </Link>
            <Link className="text-primary hover:underline" 
              to="/">
                Accueil
            </Link>
            <Link className="text-primary hover:underline" to="/about">
                A Propos
            </Link>
        </header>
    )
}
