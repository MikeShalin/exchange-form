import React, { useState, useEffect } from 'react'

import { Loader } from './Loader'
import _ from 'lodash'

export const Result = () => {
  const [secondShow, setSecondShow] = useState(false)
  const [thirdShow, setThirdShow] = useState(false)
  
  useEffect(
    () => {
      _.delay(setSecondShow, 3000, true)
      _.delay(setThirdShow, 6000, true)
    }, [],
  )
  
  return (
    <>
      <div>
        Transaction Id: 15735b1d1ba807
      </div>
      <>
        <Loader>Awaiting deposit</Loader>
        {secondShow && <Loader step='1'>Exchanging</Loader>}
        {thirdShow && <Loader step='2'>Sending to your wallet</Loader>}
      </>
    </>
  )
}
