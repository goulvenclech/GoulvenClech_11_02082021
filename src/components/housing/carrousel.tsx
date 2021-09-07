import React, { useState } from "react"

/**
 * Hero of Housing page, display the housing pictures. Will switch between pictures 
 * when the user clicks on the next or previous button
 */
export default function Carrousel(props:Props):JSX.Element {
    const [slide, setSlide] = useState(0);
    const slides = props.pictures.length
    return (
        <section className="relative">
            <div className="flex flex-nowrap group text-center hero-index h-96 rounded-3xl w-full overflow-hidden">
                {props.pictures.map((picture, index) => {
                    return(<img className="flex-none object-cover h-full w-full translate-x-0 transition-all duration-500"
                        src={picture} key={index} style={{transform: "translateX(-" + slide*100 + "%)"}}>
                    </img>)
                })}
            </div>
            <button className="text-xl absolute left-4 top-40" title="Photo précédente"
                    // Every day I wake up, then I remember that the most popular programming language in the world 
                    // can't do a simple modulo, and I am sad for the day 😔
                    onClick={() => {setSlide(((slide-1 % slides) + slides) % slides )}}> 
                <svg xmlns="http://www.w3.org/2000/svg" className="h-14 w-14" fill="none" viewBox="0 0 24 24" stroke="#FFF">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
            </button>
            <button className="text-xl absolute right-4 top-40"  title="Photo suivante"
                    onClick={() => {setSlide(((slide+1 % slides ) + slides ) % slides )}}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-14 w-14" fill="none" viewBox="0 0 24 24" stroke="#FFF">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
            </button>
        </section>
    )
}

/**
 * Just checking if the props are valids
 */
 interface Props {
    pictures: Array<string>,
}