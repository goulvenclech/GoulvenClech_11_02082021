import React from "react"

/**
 * Show a css animation during loading
 */
export default function Loader():JSX.Element {

  return (
    <div className="flex justify-center items-center h-96">
        <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-primary"></div>
    </div>
  )
}
