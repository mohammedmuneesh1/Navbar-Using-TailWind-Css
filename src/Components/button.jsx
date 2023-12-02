import React from 'react'

export const Button = (props) => {
  return (
    <button className='text-white  font-[poppins] rounded  bg-indigo-700 py-2 md:px-6 px-4 md:ml-8 hover:bg-indigo-400 duration-500'>
       {props.children}
    </button>
  )
}
