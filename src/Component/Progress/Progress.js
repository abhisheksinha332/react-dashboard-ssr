import * as React from 'react'
import ProgressBar from "@ramonak/react-progress-bar"
import './progress.css'


const Progress = () => {


  return (
    <div>
      
      <ProgressBar completed={60} height="10px" bgColor="rgb(241, 235, 235)" width="95%" margin="7px" labelSize="0px" />
      
    </div>
  )
}


export default Progress