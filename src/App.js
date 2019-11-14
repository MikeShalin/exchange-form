import React, { useState } from 'react'
import './App.css'

import { Form } from './features/Form'
import { Result } from './features/Result'

const App = () => {
  const [step, setStep] = useState(1)
  const onSubmit = (data) => {
    console.log(data)
    setStep(2)
  }
  return (
    <>
      {step === 1 && <Form onSubmit={onSubmit} />}
      {step === 2 && <Result />}
    </>
  )
}

export default App;
