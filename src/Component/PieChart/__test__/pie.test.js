import React from 'react'
import ReactDOM from 'react-dom';

import PieChart from '../PieChart';
import PieContainer from '../PieContainer'


it("renders without crushing", ()=>{
    const div = document.createElement("div");
    ReactDOM.render(<PieChart></PieChart>, div)
})

