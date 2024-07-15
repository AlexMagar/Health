'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from "zod"
import { Form } from '@/components/ui/form'
import CustomFormField from '../CustomFormField'
import SubmitButton from '../SubmitButton'
import { UserFormValidation } from '@/lib/validation'
import { useRouter } from 'next/navigation'

export enum FormFieldTypes{
  INPUT = 'input',
  EMAIL = 'email',
  TEXTAREA = 'textarea',
  PHONE_INPUT = 'phoneInput',
  CHECKBOX = 'checkbox',
  DATE_PICKER = 'datePicker',
  SELECT = 'select',
  SKELETON = 'skeletion',
}

const PatientForm = () => {

  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  //Define form 
  const form = useForm<z.infer<typeof UserFormValidation>>({
    resolver: zodResolver(UserFormValidation),
    defaultValues: {
      name:"",
      email:"",
      phone:""
    },
  })

  // Define a submit handler
  async function onSubmit({name, email, phone}: z.infer<typeof UserFormValidation>){
    setIsLoading(true)
    try {
      // const userData = { name, email, phone }
      // const user = await createUser(userData) 

      // if(user) router.push(`/patients/${user.$id}/register`)
    } catch (error) {
      console.log(error)
    }
  }


  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8 flex-1'>
        <section className='mb-12 space-y-4'>
          <h1 className='header'>Hi There</h1>
          <p className='text-dark-200'>Schedule your first appointment.</p>
        </section>

        <CustomFormField 
          control={form.control}
          fieldType={FormFieldTypes.INPUT}
          name='name'
          label='Full name'
          placeholder='Jhon Jack'
          iconSrc = '/assets/icons/user.svg'
          iconAlt = 'user'
        />

        <CustomFormField 
          control={form.control}
          fieldType={FormFieldTypes.INPUT}
          name='email'
          label='Email'
          placeholder='John@example.com'
          iconSrc = '/assets/icons/email.svg'
          iconAlt = 'email'
        />

        <CustomFormField 
          control={form.control}
          fieldType={FormFieldTypes.PHONE_INPUT}
          name='phone'
          label='Phone '
          placeholder='0987654321'
        />

        <SubmitButton isLoading={isLoading}>Get Started</SubmitButton>
      </form>
    </Form>
  )
}

export default PatientForm