import React, {useState} from 'react'
import Dropdown from './Dropdown'
export default function CategoriesBox({categories, state, ...props}){
  const [selected, setSelected] = useState("")

  const callbackFunction = (childData) => {
    setSelected (childData)
  }
  const sendData = () => {
    props.parentCallback(selected);
}
sendData()
  return(
    <div className="categories info-box">
      <h4 style={{ color: state && '#707683' }}>categories</h4>
        <Dropdown  list={categories} state={state} parentCallback = {callbackFunction} />
    </div>
  )
}