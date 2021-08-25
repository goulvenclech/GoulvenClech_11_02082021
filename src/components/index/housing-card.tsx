import React from "react"
import { Link } from "react-router-dom"

/**
 * Display all the HousingCards in a section
 */
export default function HousingCard(housing:Props):JSX.Element {
    return (
        <Link to={"/housing-" + housing.id}>
            <article className="rounded-xl p-4 bg-red-300 h-64" key={housing.id}>
                <h1>
                    {housing.title}
                </h1>
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
