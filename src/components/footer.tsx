import React from "react"
import imgUrl from "../../assets/images/logo_blanc.svg"

/**
 * The footer displayed in all the application
 */
export default function Footer():JSX.Element {
    return (
        <footer className="bg-black">
            <div className="block w-60 text-white mx-auto py-12">
                <img className="mx-auto pb-4" src={imgUrl}>
                </img>
                © 2020 Kasa. All rights reserved 
            </div>
        </footer>
    )
}
