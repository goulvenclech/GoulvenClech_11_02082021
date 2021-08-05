import React from "react"
import data from "../../../assets/data/data.json"

/**
 * Display all the HousingCards in a section
 */
export default function HousingSection() {
    
    const housings:Array<Housing> = importData()
    const housingsCards:Array<JSX.Element> = createHousingsCards(housings)
    return (
        <section className="m-4 p-4 rounded bg-gray-200
            grid grid-cols-3 gap-4">
            {housingsCards}
        </section>
    )
}

/**
 * Import the housings data from the JSON
 * ⚠️ TO DO ⚠️
 * Useless as long as we use a JSON, but when we'll insert the real backend
 * an error-handler will be needed.
 * @returns {Array<Housing>} 
 */
 function importData():Array<Housing> {
    return data
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
 * Check if the housings objects are valid
 * @interface Housing
 */
export interface Housing {
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
