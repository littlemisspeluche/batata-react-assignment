
import React, {useState} from 'react'

export default function RadioButtons({initialValue, state}) {
    const [selection, setSelection] = useState()
    
    const handleRadioButton = (e) => setSelection(e.currentTarget.value) 
  
    return (
      <div>
       {state ? 
        (
          <p style={{ color: state && '#707683',  textAlign: 'left', margin: '1em 0.6em'  }}>
            {selection === 'true' ? 'Yes' : 'No'}
          </p>
        ) : (
          <form>
            <label>
              Yes
              <br />
              <input defaultChecked={initialValue} type="radio" name="toggle" value="true" onChange={handleRadioButton} />
            </label>
            <label> 
              No
              <br />
              <input defaultChecked={!initialValue} type="radio" name="toggle" value="false" onChange={handleRadioButton} />
            </label>
          </form>
        )}
      </div>
    )
  }