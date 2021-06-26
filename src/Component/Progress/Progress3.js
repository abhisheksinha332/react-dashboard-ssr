import * as React from 'react'
import ProgressBar from "@ramonak/react-progress-bar"
import './progress.css'


const Progress3 = () => {

  return (
    <div>
  
      <ProgressBar completed={20} height="10px" bgColor="antiquewhite" width="95%" margin="7px" labelSize="0px" />
      
    </div>
  )
}


export default Progress3