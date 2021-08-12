import React, { useEffect } from "react"
import { Link } from "react-router-dom";
import imgUrl from "../../assets/images/logo_rose.svg"

/**
 * The header displayed in all the application
 */
export default function Header():JSX.Element {
    return (
        <header className="flex flex-row gap-8 items-center max-w-screen-xl  
          h-24 px-4 mx-auto mt-4 ">
            <Link to="/">
                <img className="mx-auto h-16" src={imgUrl}>
                </img>
            </Link>
            <Link className="flex-grow text-right text-primary text-2xl hover:underline" 
              to="/about">
                Accueil
            </Link>
            <Link className="text-primary text-2xl hover:underline" to="/test">
                A Propos
            </Link>
        </header>
    )
}
