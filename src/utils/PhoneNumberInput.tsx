import React, { forwardRef } from 'react'
import { TextField } from '@mui/material'

const PhoneNumberInput = (props: any, ref: any) => {

  return (
    <TextField
      {...props}
      inputRef={ref}
      fullWidth
      size='small'
      label='Phone Number'
      variant='outlined'
      name='phone'
    />
  )
}
export default forwardRef(PhoneNumberInput)