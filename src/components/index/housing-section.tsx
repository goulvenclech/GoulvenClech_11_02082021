import React, { useEffect } from "react"
// import data from "../../../assets/data/data.json"

/**
 * Display all the HousingCards in a section
 */
export default function HousingSection():JSX.Element {
    /**
     * This component render a "Loading" pure template. Then call the hook "useEffect" to
     * fetch the back end. If the back end respond properly -> display all the housing cards
     * if not -> display an error.
     * With this approach, all our side effect are contained in "useEffect" hooks.
     */
    useEffect(() => {
        const housingSection = document.querySelector(".housing-section") as HTMLElement
        async function fetchData() {
            try {
              let response = await fetch("../../../assets/data/data.json");
              if (response.ok) {
                const data:Array<Housing> = await response.json()
                const housings:string = createHousingsCards(data).join("")
                housingSection.innerHTML = housings
              } else {
                housingSection.innerHTML = 
                    `Désolé, nos serveurs font une sieste impromptue 
                    (${response.status} : ${response.statusText}) 😥
                    merci de réessayer !`
              }
            } catch (err) {
                housingSection.innerHTML = 
                    `Désolé, une vilaine erreur inconnue (${err}) fait des 
                    siennes 😥 merci de réessayer !`
            }
            
        }
        fetchData()
    })

    return (
        <section className="housing-section mx-4 xl:mx-auto my-4 p-4 rounded bg-gray-200
          max-w-screen-xl grid grid-cols-3 gap-4">
            Loading... 
        </section>
    )
}

/**
 * Create a list of JSX elements representing each housing
 * @param {Array<Housing>} housings 
 * @returns {Array<JSX.Element>}
 */
 function createHousingsCards(housings:Array<Housing>):Array<String> {
    return housings.map((housing) =>
        `<article class="rounded-md bg-red-300 h-40" key={housing.id}>
            <h1>
                ${housing.title}
            </h1>
        </article>`
    )
}

/**
 * Check if the housings objects are valid
 * @interface Housing
 */
export interface Housing {
    id: string,
    title: string,
    cover: string, 
    pictures: string[], 
    description: string, 
    host: { name: string, picture: string, }, rating: string, 
    location: string, 
    equipments: string[], 
    tags: string[],
}
