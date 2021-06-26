import * as React from 'react'
import ProgressBar from "@ramonak/react-progress-bar"
import './progress.css'


const Progress4 = () => {

  return (
    <div>

      <ProgressBar completed={90} height="10px" bgColor="blueviolet" width="95%" margin="7px" labelSize="0px" />
    </div>
  )
}


export default Progress4