import React, {useState, useEffect} from 'react'

export default function StatusChangeBox({ state, statusChange, ...props }){
  const [selectedDate, setSelectedDate] = useState()

  const sendData = () => {
    props.parentCallback(selectedDate);
  }

  useEffect(() => {
  sendData()
  })
   
  function handleChange(event) {
    setSelectedDate(event.target.value);
    event.target.type = 'date'
  }

  return(
    <div className="statusChange info-box">
      <h4 style={{ color: state && '#707683' }}>status change</h4>
      <input 
        type='text' 
        style={{ color: state && '#d8d8d8' }} 
        className="dateInput" 
        onBlur={(e) =>  handleChange(e)} 
        placeholder={statusChange}  
        disabled={state}
      />
    </div> 
  )
}
  
