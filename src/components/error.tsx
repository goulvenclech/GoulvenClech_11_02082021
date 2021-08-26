import React from "react"

/**
 * Display an error
 */
export default function Error(props:Props):JSX.Element {

  return (
    <div className="rounded-lg py-2 px-4 bg-primary text-red-900 flex gap-2">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
      <p>
        <span className="font-bold">
          Erreur {props.number} :
        </span> {props.message}
      </p>
    </div>
  )
}

/**
 * Check if the props describing the error is valid
 */
interface Props {
  number: string,
  message: string
}