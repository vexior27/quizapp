import React from "react"

export default function Button( { value, onClick } ) {
   return (
      <button onClick={onClick} className="
       bg-blue-600 
         basis-1/2 
         font-medium 
         rounded-md 
         cursor-pointer 
         text-xl
       text-white 
         border-2 
       border-blue-800 
         ease-in-out
         duration-150
         active:scale-95 
      ">
         { value }
      </button>
   )
}