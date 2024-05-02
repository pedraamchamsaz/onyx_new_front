import React from 'react'

const CustomButton = ({ buttonStyles, buttonText }) => {
  return (
    <button className={`${buttonStyles}`}>
        {buttonText}
    </button>
  )
}

export default CustomButton