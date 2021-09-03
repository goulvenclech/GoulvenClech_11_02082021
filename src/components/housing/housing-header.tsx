import React from "react"

/**
 * Title, location and tags of a housing
 */
export default function HousingHeader(props:Props):JSX.Element {
    return (
        <div className="my-2 row-span-2 col-span-2 text-primary">
            <h1 className="text-4xl">
                {props.title}
            </h1>
            <p className="text-xl leading-relaxed">
                {props.location}
            </p>
            <div className="flex flex-wrap gap-2 mt-4">
                {props.tags.map((tag, index) => 
                    <p className="rounded-full py-1 px-4 bg-primary text-white
                        text-sm" key={index}>
                        {tag}
                    </p>
                )}
            </div>
        </div>
    )
}

/**
 * Just checking if the props are valids
 */
 interface Props {
    title: string,
    location: string,
    tags: Array<string>,
}
