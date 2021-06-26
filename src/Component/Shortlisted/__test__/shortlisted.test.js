import React from 'react'
import ReactDOM from 'react-dom';


import Shortlisted from '../Shortlisted'


it("renders without crushing", ()=>{
    const div = document.createElement("div");
    ReactDOM.render(<Shortlisted></Shortlisted>, div)
})