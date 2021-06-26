import React from 'react'
import ReactDOM from 'react-dom';
import StatContainer from '../StatContainer';
import Stat1 from '../component/Stat1';
import Stat2 from '../component/Stat2';
import Stat3 from '../component/Stat3';
import Stat4 from '../component/Stat4';

import {render} from '@testing-library/react'

it("renders without crushing", ()=>{
    const div = document.createElement("div");
    ReactDOM.render(<StatContainer></StatContainer>, div)
})

it("renders without crushing", ()=>{
    const div = document.createElement("div");
    ReactDOM.render(<Stat1></Stat1>, div)
})
it("renders without crushing", ()=>{
    const div = document.createElement("div");
    ReactDOM.render(<Stat2></Stat2>, div)
})
it("renders without crushing", ()=>{
    const div = document.createElement("div");
    ReactDOM.render(<Stat3></Stat3>, div)
})
it("renders without crushing", ()=>{
    const div = document.createElement("div");
    ReactDOM.render(<Stat4></Stat4>, div)
})





