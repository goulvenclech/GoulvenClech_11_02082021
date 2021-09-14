import React from "react"
import HousingCard, { Props } from "./housing-card"
import Error from "../error"
import Loader from "../../components/loader"
import { Housing } from "../../types"
// We don't have the backend yet, so I used a mocked JSON
const backend:string = "./data.json"
const emptyData:Array<Housing> = []
/**
 * A section wrapping all the housing cards
 */
export default class HousingSection extends React.Component<null, any> {
    constructor(props:null) {
        super(props);
        this.state = {
            housingData: {fetching: true, data: emptyData},
            error: {status: false, number: "", message: ""}
        }
    }

    /**
     * After the component is rendered, fetch the back end, then change State with all 
     * the data or with an error
     */
     componentDidMount() {
        (async () => {
            try {
              let response = await fetch(backend)
              if (response.ok) {
                this.setState({housingData: {fetching: false, data: await response.json()}})
              } else {
                this.setState({error: {status: true, number: response.status.toString(), message: response.statusText}})
              }
            } catch (err) {
                this.setState({error: {status: true, number: "inconnu", message: err.toString()}})
            }
        })()
    }
    /**
     * First, display a "loading" message. Then, if the error state change, display an error. 
     * If the housingData state change, insert à <HousingCard> for every housing
     */
    render() {
        return <section className="housing-section my-4 md:p-8 rounded-3xl md:bg-gray-100">
            { this.state.error.status ? <Error number={this.state.error.number} message={this.state.error.message} />  : "" }
            { // while fetching and no error
                this.state.housingData.fetching === true && this.state.error.status === false ? <Loader /> : "" }
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
                {  // when fetching is done and no error
                    this.state.housingData.fetching === false && this.state.error.status === false ?
                    this.state.housingData.data.map((housing: JSX.IntrinsicAttributes & Props) => (
                        <HousingCard key={housing.id} {...housing} />)) : "" }
            </div>
        </section>
    }

}
