import React from 'react'

export default function StatusChangeBox({state, statusChange}){
  return (
    <div className="statusChange info-box">
      <h4 style={{ color: state && '#707683' }}>status change</h4>
      <input 
        type='text' 
        style={{ color: state && '#d8d8d8' }} 
        className="dateInput" 
        onBlur={(e) =>  e.target.type = 'date'} 
        placeholder={statusChange}  
        disabled={state}
      />
    </div> 
  )
}