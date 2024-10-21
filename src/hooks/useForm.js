import React, { useState } from 'react'

export const useForm = ( initialInputs ) => {
  const [forms, setForms] = useState(initialInputs)
  const handleInputForm = (e) => {
    setForms({
      ...forms,
      [e.target.name] : e.target.value
    })
  }
  return {
    forms ,handleInputForm
  }
}
