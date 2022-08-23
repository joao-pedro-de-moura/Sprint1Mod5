import React from 'react'

const RadioInput = ({RadioInput1, RadioInput2}) => {
  return (
    <div>
        <input type = "radio" name = "input" />
        <label for="input">{RadioInput1}</label>
        <input type = "radio" name = "input" />
        <label for="input">{RadioInput2}</label>
    </div>
  )
}

export default RadioInput