import React, { useEffect, useState } from "react"
// We don't have the backend yet, so I used a mocked JSON
const backend:string = "./data.json"

/**
 * Display a houssig offer
 */
export default function Housing():JSX.Element {
  const emptyData:Housing = { id: "", title: "", cover: "", pictures: [], description: "", 
    host: { name: "", picture: "", }, rating: "", location: "", equipments: [], tags: [],
  };
  const [housingData, setHousingData] = useState({fetching: true, data: emptyData})
  const [error, setError] = useState({status: false, message: ""})
  const [missingHoussing, setMissingHousing] = useState(false)
  /**
   * Get the requested housing ID from the URL
   */
   const resquestedHousing:string = window.location.pathname.slice(9)
  /**
   * After the component is rendered, fetch the back end, then change State with all 
   * the data or with an error
   */
   useEffect(() => {
      (async () => {
          try {
            let response = await fetch(backend)
            if (response.ok) {
              const allHousings:Array<Housing> = await response.json()
              const housing:MaybeHousing = allHousings.find(housing => housing.id === resquestedHousing )
              if (housing !== undefined){
                setHousingData({fetching: false, data:housing })
              } else {
                setMissingHousing(true)
              } 
            } else {
              setError({status: true, message: `Erreur ${response.status} : ${response.statusText}`})
            }
          } catch (err) {
              setError({status: true, message: `Erreur inconnue : ${err}`})
          }
      })()
    }, [])
  return (
    <main className="px-4 xl:mx-auto max-w-screen-xl">
      { error.status ? <p>{error.message}</p>  : "" }
      { missingHoussing ? <p>L'annonce {resquestedHousing} n'existe pas</p> : "" } 
      { housingData.fetching === true && error.status === false && missingHoussing === false ? 
        "Chargement en cours..."
      :
        <article>
          <p>{housingData.data.id}</p>
          <p>{housingData.data.title}</p>
          <p>{housingData.data.location}</p>
          <p>{housingData.data.description}</p>
          <p>{housingData.data.rating}/5</p>
        </article>
      }
    </main>
  )
}

/**
 * Find() can return a Housing object of undefined if the resquested housing ID doesn't exist
 */
type MaybeHousing = Housing | undefined

/**
 * Check if the housings objects are valid
 * @interface Housing
 */
interface Housing {
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

