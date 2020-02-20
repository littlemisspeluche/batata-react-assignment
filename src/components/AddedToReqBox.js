import React from 'react'
import RadioButtons from './RadioButtons'

export default function AddedToReq({initialValue, state}){
  return(
    <div className="addedToReq info-box">
      <h4 style={{ color: state && '#707683' }}>
        Added to req
      </h4>
      <RadioButtons initialValue={initialValue} state={state}/>
    </div>
  )
}