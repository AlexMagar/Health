'use client'

import React from 'react'
import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from './ui/form'
import { Input } from './ui/input'
import { Control } from 'react-hook-form'
import { FormFieldTypes } from './forms/PatientForm'
import Image from 'next/image'

interface CustomProps{
    control: Control<any>,
    fieldType: FormFieldTypes,
    name: string,
    label ?: string,
    placeholder?: string,
    iconSrc?: string,
    iconAlt?: string,
    disabled?: boolean,
    dateFormat?: string,
    showTimeSelect?: boolean,
    children?: React.ReactNode,
    renderSkeleton?: (filed: any) => React.ReactNode,

}

const RenderField = ({field, props}: {field: any; props: CustomProps}) => {
    const { fieldType, iconSrc, iconAlt, placeholder} = props
   switch (fieldType) {
    case FormFieldTypes.INPUT:
        return (
            <div className='flex rounded-md border-dark-500'>
                {iconSrc && (
                    <Image
                        src={iconSrc}
                        height={24}
                        width={24}
                        alt={iconAlt || 'icon'}
                        className='ml-2'
                    />
                )}
                <FormControl>
                    <Input
                        placeholder={placeholder}
                        {...field}
                        className='border-0'
                    />
                </FormControl>
            </div>
        )
    default:
        break;
   }
}

const CustomFormField = ( props: CustomProps) => {
    const {control, fieldType, name, label} = props
  return (
    <FormField 
        control={control}
        name={name}
        render={({ field }) => (
            <FormItem className='flex-1'>
                {fieldType !== FormFieldTypes.CHECKBOX && label && (
                    <FormLabel>{label}</FormLabel>
                )}
                <RenderField field={field} props={props}/>
                <FormMessage className='shad-error'/>
            </FormItem>
        )}
    />
  )
}

export default CustomFormField