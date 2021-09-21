import React from "react"
/**
 * Just checking if the props are valids
 */
 interface Props {
    pictures: Array<string>,
}
/**
 * Hero of Housing page, display the housing pictures. Will switch between pictures 
 * when the user clicks on the next or previous button
 */
 export default class Carrousel extends React.Component<any, any> {
    constructor(props:Props) {
        super(props)
        this.state = {
            slide: 0,
            slides: props.pictures.length
        }
    }
    render() {
        return <section className="relative">
            <div className="flex flex-nowrap group text-center hero-index h-96 rounded-3xl w-full overflow-hidden">
                {this.props.pictures.map((picture: string | undefined, index: React.Key | null | undefined) => {
                    return(<img className="flex-none object-cover h-full w-full translate-x-0 transition-all duration-500"
                        src={picture} key={index} style={{transform: "translateX(-" + this.state.slide*100 + "%)"}}>
                    </img>)
                })}
            </div>
            { this.state.slides === 1 ? "" : <>
            <button className="text-xl absolute left-4 top-40" title="Photo précédente"
                    // Every day I wake up, then I remember that the most popular programming language in the world 
                    // can't do a simple modulo, and I am sad for the day 😔
                    onClick={() => {this.setState({slide: (((this.state.slide-1 % this.state.slides) + this.state.slides) % this.state.slides )})}}> 
                <svg xmlns="http://www.w3.org/2000/svg" className="h-14 w-14 drop-shadow-md" fill="none" viewBox="0 0 24 24" stroke="#FFF">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
            </button>
            <button className="text-xl absolute right-4 top-40"  title="Photo suivante"
                    onClick={() => {this.setState({slide: (((this.state.slide+1 % this.state.slides) + this.state.slides) % this.state.slides )})}}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-14 w-14 drop-shadow-md" fill="none" viewBox="0 0 24 24" stroke="#FFF">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
            </button></>}
        </section>
    }
}

