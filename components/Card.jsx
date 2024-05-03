import React from 'react'
import Image from 'next/image'

const Card = ({ name, country, price }) => {
  return (
    <div className='border w-[200px] h-[300px] rounded-[12px] flex flex-col justify-between'>
        <Image 
            className='h-[175px] w-full object-cover rounded-t-[12px]'
        />
        <div className='p-3 flex flex-col justify-between h-[125px]'>
            <p className='text-xs'>{country}</p>
            <h3 className='text-xl'>{name}</h3>
            <p><span className='font-bold'>£{price}</span><span className='text-sm'> / Person</span></p>
        </div>
    </div>
  )
}

export default Card