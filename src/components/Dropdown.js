import React, {useState, useEffect} from 'react'

export default function Dropdown({ state, list, ...props }){
  const [selectedOption, setSelectedOption] = useState()

  const sendData = () => props.parentCallback(selectedOption);
  
  function handleChange(event) {
    setSelectedOption(event.target.value);
  }
  
  const objectEntries = Object.entries(list).map(([key, value]) => {
    return value
  })

  useEffect(() => {
    sendData()
  })

  const result = objectEntries.map((item, i) => (
    <option value={item} key={i}>{item}</option>
  ))

  return (
    <select value={selectedOption} onChange={handleChange} className="selectMenu" disabled={state}>
      {result}
    </select>
  )
}
