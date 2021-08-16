import React, { useEffect } from "react"
const backend:string = "./data.json"

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
        const loadingMessage = document.querySelector(".housing-section .loading-message") as HTMLElement
        const errorMessage = document.querySelector(".housing-section .error-message") as HTMLElement
        const housingWrapper = document.querySelector(".housing-section .housing-wrapper") as HTMLElement
        /**
         * wait for the backend to be fetch, then delete the "Loading..."
         * then look if the back end send an error or the housing data
         */ 
        async function fetchData() {
            try {
              let response = await fetch(backend)
              loadingMessage.remove()
              if (response.ok) {
                // create a card for every housing and insert them in the section
                const data:Array<Housing> = await response.json()
                createHousingsCards(data).forEach(card => {
                    housingWrapper.insertAdjacentHTML("beforeend", card)
                })
              } else {
                errorMessage.innerHTML = `Désolé, nos serveurs font une sieste impromptue 
                    (${response.status} : ${response.statusText}) 😥
                    merci de réessayer !`
              }
            } catch (err) {
                errorMessage.innerHTML = `Désolé, une vilaine erreur inconnue (${err}) fait des 
                    siennes 😥 merci de réessayer !`
            }
        }
        fetchData()
    })

    return (
        <section className="housing-section my-4 p-8 rounded-3xl bg-gray-100">
            <span className="loading-message">
                Loading...
            </span>  
            <span className="error-message">
            </span>
            <div className="housing-wrapper grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
            </div>
        </section>
    )
}

/**
 * Create a list of JSX elements representing each housing
 * @param {Array<Housing>} housings 
 * @returns {Array<JSX.Element>}
 */
 function createHousingsCards(housings:Array<Housing>):Array<string> {
    return housings.map((housing) =>
        `<article class="rounded-xl p-4 bg-red-300 h-64" key={housing.id}>
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
    host: { name: string, picture: string, }, 
    rating: string, 
    location: string, 
    equipments: string[], 
    tags: string[],
}
