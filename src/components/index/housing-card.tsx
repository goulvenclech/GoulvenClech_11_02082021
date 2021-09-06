import React from "react"
import { Link } from "react-router-dom"

/**
 * Link to a Housing offer, display the cover & title 
 */
export default function HousingCard(housing:Props):JSX.Element {
    return (
        <Link className="rounded-xl overflow-hidden" to={"/housing-" + housing.id}>
            <article className="group relative h-64 after:absolute after:inset-0 after:bg-gradient-to-b 
                after:from-transparent after:via-transparent after:to-black" 
                key={housing.id}>
                <h1 className="absolute left-4 bottom-4 w-2/3 text-white font-semibold z-50">
                    {housing.title}
                </h1>
                <img className="w-full h-full object-fill duration-500 group-hover:scale-105" 
                    src={housing.cover}/>
            </article>
        </Link>
    )
}

/**
 * Check if the housings objects are valid
 * @interface Housing
 */
export interface Props {
    id: string,
    title: string,
    cover: string, 
    pictures: string[], 
    description: string, 
    host: { name: string, picture: string, }, 
    rating: string, 
    location: string, 
    equipments: string[], 
    tags: string[],
}
