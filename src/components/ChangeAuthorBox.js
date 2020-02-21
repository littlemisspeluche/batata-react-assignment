
import React, {useState, useEffect} from 'react'
import InputField from './InputField'

export default function ChangeAuthor({state, ...props}){
  const [changeAuthor, setChangeAuthor] = useState("")

  const sendData = () => props.parentCallback(changeAuthor)

  useEffect(() => {
    sendData()
  })

  return (
    <div className="changeAuthor info-box">
      <h4 style={{ color: state && '#707683' }}>change author</h4>
      { state ? 
        <p style={{ color: '#d8d8d8' }}> {changeAuthor}</p> 
      : 
      <InputField onChange={(e) => {setChangeAuthor(e.target.value)}} value={changeAuthor} />
      }
    </div>

  )
}