import React from 'react'
import ReactDOM from 'react-dom';


import Sidebar from '../Sidebar';


it("renders without crushing", ()=>{
    const div = document.createElement("div");
    ReactDOM.render(<Sidebar></Sidebar>, div)
})