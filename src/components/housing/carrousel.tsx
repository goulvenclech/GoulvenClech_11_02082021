import React from "react"

/**
 * Display the housing pictures
 */
export default function Carrousel(props:Props):JSX.Element {
    return (
        <div className="text-center hero-index h-96 rounded-3xl w-full overflow-hidden">
            <img className="object-cover h-full w-full"
              src={props.imgUrl}>
            </img>
        </div>
    )
}

/**
 * Just checking if the props are valids
 */
 interface Props {
    imgUrl: string,
}