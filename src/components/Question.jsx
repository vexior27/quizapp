import React from "react"

export default function Question({value}) {

   function decodeHtml(html) {
      const txt = new DOMParser().parseFromString(html, "text/html");
      return txt.documentElement.textContent;
    }
   
   return (
      <div className="text-3xl p-3 text-white font-semibold">
         <h4 className="text-lg font-medium text-gray-400 ">Question</h4>
         {decodeHtml(value)}
      </div>
   )
}