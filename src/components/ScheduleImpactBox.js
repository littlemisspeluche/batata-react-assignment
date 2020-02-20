import React from 'react'
import RadioButtons from './RadioButtons'

export default function ScheduleImpact({state, initialValue}){
    return(
        <div className="scheduleImpact info-box">
          <h4 style={{ color: state && '#707683' }}>schedule impact</h4>
          <RadioButtons initialValue={initialValue} state={state} />
      </div>
    )
}