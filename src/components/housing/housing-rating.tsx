import React from "react"

/**
 * display the rating of an offer
 */
export default function HousingRating(props:Props):JSX.Element {
    const emptyStar = <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-300" fill="#D1D5DB" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                    </svg>
    const stars = [emptyStar,emptyStar,emptyStar,emptyStar,emptyStar]
    // replace an emptyStar by a filled star for every rating point
    for (let i = 0; i < props.rating; i++) {
        stars.splice(i, 1, 
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="#FF6060" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
        </svg>,)
    }
    return (
        <div className="row-start-3 col-start-1 md:row-start-auto md:col-start-auto
             flex items-center justify-start md:justify-end">
            {stars}
        </div>
    )
}

/**
 * Just checking if the props are valids
 */
 interface Props {
    rating: number,
}