import React from 'react'
import ReactDOM from 'react-dom';


import Total from '../Total2'

it("renders without crushing", ()=>{
    const div = document.createElement("div");
    ReactDOM.render(<Total></Total>, div)
})