import React from "react"

/**
 * Title and profile picture of the housing owner
 */
export default function HousingOwner(props:Props):JSX.Element {
    const endofname = props.name.indexOf(" ")
    const name = props.name.slice(0, endofname)
    const lastname = props.name.slice(endofname)
    return (
        <div className="h-1/2 w-1/4 ml-auto text-primary text-right flex items-center">
            <h1 className="ml-auto block text-xl">
                {name} <br /> {lastname}
            </h1>
            <img className="rounded-full ml-2 h-16" src={props.avatar} />
        </div>
    )
}

/**
 * Just checking if the props are valids
 */
 interface Props {
    name: string,
    avatar: string,
}
