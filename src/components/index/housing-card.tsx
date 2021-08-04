import React from "react"
import data from "../../../assets/data/data.json"

/**
 * Display all the HousingCards in a section
 */
export default function HousingCards() {
    const housings:dataRespond = importData()
    // If the backend worked, we got an Array<Housing>, otherwise display an error
    if(housings instanceof Array) {
        const housingsCards:Array<JSX.Element> = createHousingsCards(housings)
        return (
            <section className="m-4 p-4 rounded bg-gray-200
                grid grid-cols-3 gap-4">
                {housingsCards}
            </section>
        )
    }else { return <h2>Désolé, une erreur est survenue 😥</h2> }
}

/**
 * Create a list of JSX elements representing each housing
 * @param {Array<Housing>} housings 
 * @returns {Array<JSX.Element>}
 */
function createHousingsCards(housings:Array<Housing>):Array<JSX.Element> {
    return housings.map((housing) =>
        <article className="rounded-md bg-red-300 h-40">
            <h1>
                {housing.title}
            </h1>
        </article>
    )
}

/**
 * Import the housings data from the JSON
 * @returns {dataRespond} 
 */
 function importData():dataRespond {
    return data
}

/**
 * Currently this is pretty useless because we import the data from a JSON
 * but when we'll have a back end, this allow to accept a backend failure
 * and display an error instead of just crashing !
 * @type {dataRespond}
 */
type dataRespond = Array<Housing> | {error: number, errorMessage: string}

/**
 * Check if the housings objects are valid
 * @interface Housing
 */
interface Housing {
    id: string; 
    title: string; 
    cover: string; 
    pictures: string[]; 
    description: string; 
    host: { name: string; picture: string; }; rating: string; 
    location: string; 
    equipments: string[]; 
    tags: string[];
}
