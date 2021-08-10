import React, { useEffect } from "react"
import imgUrl from "../../assets/images/logo_blanc.svg"

/**
 * The footer displayed in all the application
 */
export default function Footer():JSX.Element {
    /**
     * Render the logo of the app
     */
    useEffect(() => {
        const logo = document.querySelector("footer img") as HTMLImageElement 
        logo.src = imgUrl
    })
    return (
        <footer className="bg-black">
            <div className="block w-60 text-white mx-auto py-12">
                <img className="mx-auto pb-4">
                </img>
                © 2020 Kasa. All rights reserved 
            </div>
        </footer>
    )
}
