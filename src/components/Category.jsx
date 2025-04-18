import React from "react"

export default function Category( { cat }) {
   return (
      <div className="font-medium text-sm text-white p-3">
         <span className="text-gray-400 ">Category: </span>{cat}
      </div>
   )
}