
import React from 'react'

export default function Dropdown({state, list}){
  const objectEntries = Object.entries(list).map(([key, value]) => {
    return value
  })
  
  const result = objectEntries.map((item, i) => (
    <option key={i}>{item}</option>
  ))

  return (
    <select className="selectMenu" disabled={state}>
      {result}
    </select>
  )
}
  