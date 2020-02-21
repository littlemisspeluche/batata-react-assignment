import React, {useState, useEffect} from 'react'
import InputField from './InputField'

export default function ReasonBox({ state, ...props }){
  const [newReason, setNewReason] = useState("")

  const sendData = () => props.parentCallback(newReason);
 
  useEffect(() => {
    sendData()
  })
  return (
    <div className="reason info-box">
      <h4 style={{ color: state && '#707683' }}>reason</h4>
      {state ? 
        <p style={{ color: '#d8d8d8' }}> {newReason}</p> 
      : 
        <InputField onChange={(e) => {setNewReason(e.target.value)}} value={newReason} />
      }
    </div>
  )
}