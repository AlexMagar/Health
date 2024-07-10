'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import React from 'react'
import { useForm } from 'react-hook-form'
import { z } from "zod"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel } from '@/components/ui/form'
import { Input } from '../ui/input'
import { Button } from '../ui/button'

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
        <FormField
          control={form.control}
          name='username'
          render={({field}) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder='shadcn' {...field} />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
            </FormItem>
          )}
        />
        <Button type='submit'>Submit</Button>
      </form>
    </Form>
  )
}

export default PatientForm