import React from 'react'
import Image from 'next/image'

const Card = ({ name, country, price }) => {
  return (
    <div className='border w-[200px] h-[300px] rounded-[12px]'>
        <Image />
        <div className='p-3'>
            <p className='text-xs'>{country}</p>
            <h3 className='text-xl'>{name}</h3>
            <p className='font-bold'>£{price} / Person</p>
        </div>
    </div>
  )
}

export default Card