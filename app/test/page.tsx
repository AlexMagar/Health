'use client'

import 'react-phone-number-input/style.css'
import React, { useState } from 'react'
import PhoneInput from 'react-phone-number-input'

const page = () => {
    const [value, setValue] = useState()
    console.log(value)
  return (
    <div className='flex w-1/2 m-3'>
        <PhoneInput   
            className='bg-none'
            placeholder="Enter phone number"
            defaultCountry='AU'
            value={value as E164Number | undefined}
            onChange={setValue}
        />
        <h1>Phone</h1>
    </div>
  )
}

export default page