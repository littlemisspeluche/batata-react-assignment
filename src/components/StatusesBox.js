import React from 'react'
import Dropdown from './Dropdown'

export default function StatusesBox({statuses, state}){
  return (
    <div className="status info-box">
      <h4 style={{ color: state && '#707683' }}>status</h4>
      <Dropdown list={statuses} state={state} />
    </div>
  )
}