import React from 'react'

const SectionTitle = ({heading,subHeading}) => {
  return (
    <div className='flex flex-col items-center'>
        <h4 >{subHeading}</h4>
        <h2 className='text-4xl font-semibold'>{heading}</h2>
    </div>
  )
}

export default SectionTitle