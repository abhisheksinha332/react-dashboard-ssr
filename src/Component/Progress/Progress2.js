import * as React from 'react'

import ProgressBar from "@ramonak/react-progress-bar"
import './progress.css'


const Progress2 = () => {
 
  return (
    <div>
     
      <ProgressBar completed={50} height="10px" bgColor="rgb(240, 15, 71)" width="95%" margin="7px" labelSize="0px" />
      
    </div>
  )
}


export default Progress2