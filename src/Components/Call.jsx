import React from 'react'
const con="97159 38778"

const Call = () => {
  return (
    <a href={`tel:${con}`} className='call'>
        <i class="fa-solid fa-phone "></i>
    </a>
  )
}

export default Call