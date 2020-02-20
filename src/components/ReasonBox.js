import React, {useState} from 'react'
import InputField from './InputField'

export default function ReasonBox({ state }){

  const [newReason, setNewReason] = useState("")
    
  return (
        <div className="reason info-box">
        <h4 style={{ color: state && '#707683' }}>reason</h4>
        {state ? 
          <p style={{ color: '#d8d8d8' }}> {newReason}</p> 
        : 
          <InputField onChange={(e) => {setNewReason(e.target.value)}}/>
        }
      </div>
    )
}