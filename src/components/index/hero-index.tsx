import React from "react"
import imgUrl from "../../../assets/images/cover-home.png"

/**
 * Hero of the Index Page, displaying an image and the company slogan
 */
export default function HeroIndex():JSX.Element {
    return (
        <section className="relative text-center hero-index bg-black h-52 rounded-3xl w-full overflow-hidden">
            <img className="opacity-70 object-cover h-full w-full"
              src={imgUrl}>
            </img>
            <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-5xl text-white w-full">
                Chez vous, partout et ailleurs
            </h1>
        </section>
    )
}
