import React, {useState} from 'react'

export default function InputField({onChange}){
  const [isFocused, setIsFoused] = useState(false)
  
  const handleMouseActions = () => setIsFoused(true)
  const handleMouseLeave = () => setIsFoused(false)

  return(
    <input 
      type='text' 
      className="userInput" 
      onChange={onChange}          
      onBlur={handleMouseActions}
      onMouseEnter={handleMouseActions}
      onMouseLeave={handleMouseLeave}
      style={{ borderColor: isFocused ? '#3DADF3' : 'black' }} 
    />
  )
}