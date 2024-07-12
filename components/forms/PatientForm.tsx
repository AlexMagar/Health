'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import React from 'react'
import { useForm } from 'react-hook-form'
import { z } from "zod"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import CustomFormField from '../CustomFormField'

export enum FormFieldTypes{
  INPUT = 'input',
  TEXTAREA = 'textarea',
  PHONE_INPUT = 'phoneInput',
  CHECKBOX = 'checkbox',
  DATE_PICKER = 'datePicker',
  SELECT = 'select',
  SKELETON = 'skeletion',
}

const formSchema = z.object({
  username: z.string().min(2,{
    message: 'Username must be at least 2 characters.'
  }).max(50),
})

const PatientForm = () => {
  //Define form 
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username:"",
    },
  })

  // Define a submit handler
  function onSubmit(values: z.infer<typeof formSchema>){
    //do smth with the form values
    //this will be type-safe and validation
    console.log(values)
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
        <Button type='submit'>Submit</Button>
      </form>
    </Form>
  )
}

export default PatientForm