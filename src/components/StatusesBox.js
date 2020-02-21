import React, {useState} from 'react'
import Dropdown from './Dropdown'
export default function StatusesBox({statuses, state, ...props}){
  const [selected, setSelected] = useState("")

  const callbackFunction = (childData) => {
    setSelected (childData)
  }
  const sendData = () => {
    props.parentCallback(selected);
}
sendData()
  return (
    <div className="status info-box">
      <h4 style={{ color: state && '#707683' }}>status</h4>
      <Dropdown  
            list={statuses} state={state} 
            parentCallback = {callbackFunction}/>
    </div>
  )
}