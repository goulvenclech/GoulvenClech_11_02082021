import React, { useEffect, useState } from "react"
import MissingHousing from "../components/logement/missing-housing"
import Error from "../components/error"
import { Housing } from "../types"
import Carrousel from "../components/housing/carrousel"
import HousingHeader from "../components/housing/housing-header"
import Accordion from "../components/accordion"
import HousingOwner from "../components/housing/housing-owner"
import HousingRating from "../components/housing/housing-rating"
// We don't have the backend yet, so I used a mocked JSON
const backend:string = "./data.json"

/**
 * Display a houssig offer
 */
export default function HousingPage():JSX.Element {
  const emptyData:Housing = { id: "", title: "", cover: "", pictures: [], description: "", 
    host: { name: "", picture: "", }, rating: "", location: "", equipments: [], tags: [],
  };
  const [housingData, setHousingData] = useState({fetching: true, data: emptyData})
  const [error, setError] = useState({status: false, number: "", message: ""})
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
              setError({status: true, number: response.status.toString(), message: response.statusText})
            }
          } catch (err) {
              setError({status: true, number: "inconnu", message: err})
          }
      })()
    }, [])
  return (
    <main className="px-4 xl:mx-auto max-w-screen-xl">
      { error.status ? <Error number={error.number} message={error.message} />  : "" }
      { missingHoussing ? <MissingHousing /> : "" } 
      { // while fetching and no error
        housingData.fetching === true && error.status === false && missingHoussing === false ? 
        "Chargement en cours..." : "" }
      { // when fetching is done and no error
        housingData.fetching === false && error.status === false && missingHoussing === false ?
        <section className="flex flex-wrap gap-4">
          <Carrousel imgUrl={housingData.data.pictures[0]} />
          <HousingHeader title={housingData.data.title} location={housingData.data.location} tags={housingData.data.tags} />
          <HousingOwner name={housingData.data.host.name} avatar={housingData.data.host.picture} />
          <HousingRating rating={parseInt(housingData.data.rating)} />
          <div className="w-full grid grid-cols-2 gap-8">
            <Accordion title="Description" content={housingData.data.description} />
            <Accordion title="Description" content={housingData.data.equipments} />
          </div>
        </section> 
        : ""}
    </main>
  )
}

/**
 * Find() can return a Housing object of undefined if the resquested housing ID doesn't exist
 */
type MaybeHousing = Housing | undefined



