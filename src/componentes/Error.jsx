import React from 'react'

const Error = ({children}) => {
  return (
    <div className='bg-red-700 text-center my-4 text-xl text-cyan-50 rounded-md'>
            <p>{children}</p>
    </div>
  )
}

export default Error