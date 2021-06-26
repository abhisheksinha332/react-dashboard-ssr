import React from 'react'
import ReactDOM from 'react-dom';

import TotalApplication from '../TotalApplication'

it("renders without crushing", ()=>{
    const div = document.createElement("div");
    ReactDOM.render(<TotalApplication></TotalApplication>, div)
})