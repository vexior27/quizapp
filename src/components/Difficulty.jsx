import React from "react"

export default function Difficulty( { diff } ) {

   const diffColor = {
      easy: "bg-green-500",
      medium: "bg-yellow-500",
      hard: "bg-red-600"
    }[diff] || "bg-gray-500";

   return (
      <div className={`capitalize font-semibold text-md text-white absolute top-8 right-10 pl-2 pr-2 text-center rounded-lg ${diffColor}`}>
         {diff}
      </div>
   )
}