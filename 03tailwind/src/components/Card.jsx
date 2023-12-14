import React from 'react'

function Card({name,btnText="VISIT"}) {
  console.log(name);
  return (
    <figure className="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
  <img className="w-28 h-29 rounded-full mx-auto" src="\young-man-posing-casually-white-wall.jpg" alt="" width="384" height="512" />
  <div className="pt-6 text-center space-y-4">
    <blockquote>
      <p className="text-lg font-medium">
        “Shaant hoja punjabi teri maa ki chut ₹andi ke bache lassi behen ke laude
”
      </p>
    </blockquote>
    <figcaption className="font-medium">
      <div className="text-sky-500 dark:text-sky-400">
        {name}
      </div>
      <div className="text-slate-700 dark:text-slate-500">
       Punjab, Khalistan
       <br />
       <button className="btn m-4 bg-pink-500 text-white px-4 py-2 rounded">{btnText}</button>
      </div>
    </figcaption>
  </div>
</figure>

  )
}

export default Card
