import React, { memo } from 'react'
import { Button } from 'react-bootstrap'

const ChildComponent = ({handleStart}) => {
    console.log("rerender");
  return (
    <div>
      <Button onClick={handleStart}>Tăng</Button>
    </div>
  )
}

export default ChildComponent// higher order function

