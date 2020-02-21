import React, {useState, useEffect} from 'react'
import RadioButtons from './RadioButtons'

export default function AddedToReq({initialValue, state, ...props}){
  const [added, setAdded] = useState()

  const callbackFunction = (childData) => setAdded (childData)
  const sendData = () => props.parentCallback(added);
  
  useEffect(() => {
    sendData()
  })

  return(
    <div className="addedToReq info-box">
      <h4 style={{ color: state && '#707683' }}>
        Added to req
      </h4>
      <RadioButtons parentCallback = {callbackFunction} initialValue={initialValue} state={state} />
    </div>
  )
}