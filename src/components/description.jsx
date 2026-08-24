import React, { useState } from 'react'


function Description({ text }) {
    const [showMore, setShowMore] = useState(false);


  return (
    <div>
        <p className={!showMore ? "overflow-hidden text-ellipsis whitespace-nowrap" : ""}>
            {text}
        </p>

        <button
        className='font-body font-bold hover:underline' 
        onClick={()=> setShowMore(!showMore)}>
            {showMore ? "Less" : "More"}
        </button>
    </div>
  )
}

export default Description