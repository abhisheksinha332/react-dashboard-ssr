import * as React from 'react'
import ProgressBar from "@ramonak/react-progress-bar"
import './progress.css'

const Progress1 = () => {

  return (
    <div>
     
      <ProgressBar completed={80} height="10px" bgColor="rgb(0, 140, 255)" width="95%" margin="7px" labelSize="0px" />
    </div>
  )
}


export default Progress1