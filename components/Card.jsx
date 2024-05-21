import React from 'react'
import Image from 'next/image'

const Card = ({ name, country, price, image }) => {
  return (
    <div className='border w-[200px] h-[300px] rounded-[12px] flex flex-col justify-between'>
        <Image 
            className='h-[175px] w-full object-cover rounded-t-[12px]'
            src={image !== 'url_to_image' ? image : 'https://i.natgeofe.com/n/4f5aaece-3300-41a4-b2a8-ed2708a0a27c/domestic-dog_thumb_square.jpg'}
            width={100}
            height={100}
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