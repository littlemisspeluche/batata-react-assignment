import React, {useState} from 'react'
import RadioButtons from './RadioButtons'

export default function ScheduleImpact({state, initialValue, ...props}){
  const [impact, setImpact] = useState()

  const callbackFunSetImpact = (childData) => {
    setImpact (childData)
  }
  const sendData = () => {
    props.parentCallback(impact);
}
sendData()
    return(
        <div className="scheduleImpact info-box">
          <h4 style={{ color: state && '#707683' }}>schedule impact</h4>
          <RadioButtons parentCallback = {callbackFunSetImpact} initialValue={initialValue} state={state} />
      </div>
    )
}