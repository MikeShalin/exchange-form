import React, { useState, useEffect } from 'react';
import './App.css';


const FormElement = ({ value: initialValue }) => {
  const [value, setValue] = useState(initialValue)
  return <input type="text" value={value} onChange={(e) => setValue(e.target.value)}/>
}

const Form = ({ onSubmit }) => (
  <form style={{ width: 300 }} onSubmit={(e) => onSubmit(e)}>
    <fieldset>
      <label>
        from
        <FormElement value='0.1' />
      </label>
      <select name="from">
        <option value="BTC">BTC</option>
      </select>
    </fieldset>
    <fieldset>
      <label>
        to
        <FormElement value='4.6022063' />
      </label>
      <select name="to" value='4.6066972'>
        <option value="ETH">ETH</option>
      </select>
    </fieldset>
    <fieldset>
      <label>
        Recipient Wallet
        <FormElement type="text" value='' />
      </label>
    </fieldset>
    <fieldset>
      <button>Exchange</button>
    </fieldset>
  </form>
)

const Result = () => {
  const [width, setWidth] = useState(20)
  const [loader, showLoader] = useState(true)
  useEffect(
    () => {
      setWidth(200)
      setTimeout(
        () => showLoader(false),
        3100,
      )
    }, [],
  )
  return (
    <>
      <div>
        Transaction Id: 15735b1d1ba807
      </div>
      {
        loader
          ? (
            <div style={{ height: 10, width: 200, border: '1px solid' }}>
              <div style={{
                height: '100%',
                background: 'red',
                transition: '3s',
                width,
              }}
              />
            </div>
          )
          : 'done'
      }
    </>
  )
}

const App = () => {
  const [step, setStep] = useState(1)
  const onSubmit = (e) => {
    e.preventDefault()
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
