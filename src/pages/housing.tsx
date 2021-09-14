import React from "react"
import MissingHousing from "../components/housing/missing-housing"
import Error from "../components/error"
import { Housing } from "../types"
import Carrousel from "../components/housing/carrousel"
import HousingHeader from "../components/housing/housing-header"
import Accordion from "../components/accordion"
import HousingOwner from "../components/housing/housing-owner"
import HousingRating from "../components/housing/housing-rating"
import Loader from "../components/loader"
// We don't have the backend yet, so I used a mocked JSON
const backend:string = "./data.json"
const emptyData:Housing = { id: "", title: "", cover: "", pictures: Array<string>(), description: "", 
host: { name: "", picture: "", }, rating: "", location: "", equipments: Array<string>(), tags: Array<string>(),
}

/**
 * Display a requested houssig offer with all the informations about the place and the owner.
 * If the back end failed, display an Error. If the offer didn't exist, display MissingHousing.
 * See documentation => https://github.com/GoulvenC/GoulvenClech_11_02082021/wiki/Page-Housing
 */
 export default class HousingPage extends React.Component<any, any> {
  constructor(props:any) {
      super(props);
      this.state = {
          housingData: {fetching: true, data: emptyData},
          error: {status: false, number: "", message: ""},
          missingHousing: false
      }
  }

  /**
   * After the component is rendered, fetch the back end, then change State with all 
   * the data or with an error
   */
  componentDidMount() {
      /**
       * Get the requested housing ID from the URL
       */
      const resquestedHousing:string = window.location.pathname.slice(9);
      (async () => {
          try {
            let response = await fetch(backend)
            if (response.ok) {
              const allHousings:Array<Housing> = await response.json()
              const housing:MaybeHousing = allHousings.find(housing => housing.id === resquestedHousing )
              if (housing !== undefined){
                this.setState({housingData: {fetching: false, data:housing }})
              } else {
                this.setState({missingHousing: true})
              } 
            } else {
              this.setState({error: {status: true, number: response.status.toString(), message: response.statusText}})
            }
          } catch (err) {
            this.setState({error: {status: true, number: "inconnu", message: err.toString()}})
          }
      })()
  }
  render() {
    return<main className="px-4 xl:mx-auto max-w-screen-xl">
        {console.log(this.state.housingData.fetching + " " + this.state.error.status + " " + this.state.missingHousing)}
        { this.state.error.status ? <Error number={this.state.error.number} message={this.state.error.message} />  : "" }
        { this.state.missingHousing ? <MissingHousing /> : "" } 
        { // while fetching and no error
          this.state.housingData.fetching === true && this.state.error.status === false && this.state.missingHousing === false ? 
          <Loader /> : "" }
        { // when fetching is done and no error
          this.state.housingData.fetching === false && this.state.error.status === false && this.state.missingHousing === false ?
          <section>
            <Carrousel pictures={this.state.housingData.data.pictures} />
            <div className="grid grid-rows-2 md:grid-cols-3 grid-cols-2  mt-4">
              <HousingHeader title={this.state.housingData.data.title} location={this.state.housingData.data.location} tags={this.state.housingData.data.tags} />
              <HousingOwner name={this.state.housingData.data.host.name} avatar={this.state.housingData.data.host.picture} />
              <HousingRating rating={parseInt(this.state.housingData.data.rating)} />
            </div>
            <div className="w-full grid grid-cols-1 md:grid-cols-2 md:gap-8">
              <Accordion title="Description" content={this.state.housingData.data.description} />
              <Accordion title="Équipement" content={this.state.housingData.data.equipments} />
            </div>
          </section> 
          : ""}
    </main>
  }
}

/**
 * Find() can return a Housing object of undefined if the resquested housing ID doesn't exist
 */
type MaybeHousing = Housing | undefined



