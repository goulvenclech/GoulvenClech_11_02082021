import React from "react"
import data from "../../assets/data/data.json"
import HousingCards from "../components/index/housing-card"

/**
 * The homepage of Kasa !
 */
export default function IndexPage() {
  const data:Array<Housing> = importData()
  return (
    <HousingCards housingData={data} />
  )
}

/**
 * Import the housings data from the JSON
 * @returns {Array<Housing>} 
 */
 function importData():Array<Housing> {
  return data
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

