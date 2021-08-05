import React from "react"
import { Housing } from "../../pages"

/**
 * Display all the HousingCards in a section
 */
export default function HousingCards(props:Props) {
    const housings:Array<Housing> = props.housingData
    const housingsCards:Array<JSX.Element> = createHousingsCards(housings)
    return (
        <section className="m-4 p-4 rounded bg-gray-200
            grid grid-cols-3 gap-4">
            {housingsCards}
        </section>
    )
}

/**
 * Create a list of JSX elements representing each housing
 * @param {Array<Housing>} housings 
 * @returns {Array<JSX.Element>}
 */
function createHousingsCards(housings:Array<Housing>):Array<JSX.Element> {
    return housings.map((housing) =>
        <article className="rounded-md bg-red-300 h-40" key={housing.id}>
            <h1>
                {housing.title}
            </h1>
        </article>
    )
}

/**
 * Just a type to check is the prop is valid
 */
type Props = { housingData: Array<Housing> }
