import React from 'react'
import ReactDOM from 'react-dom';


import Progress from '../Progress';
import Progress1 from '../Progress1';
import Progress2 from '../Progress2';
import Progress3 from '../Progress3';
import Progress4 from '../Progress4';
import ProgressContainer from '../ProgressContainer';

it("renders without crushing", ()=>{
    const div = document.createElement("div");
    ReactDOM.render(<ProgressContainer></ProgressContainer>, div)
})

it("renders without crushing", ()=>{
    const div = document.createElement("div");
    ReactDOM.render(<Progress></Progress>, div)
})

it("renders without crushing", ()=>{
    const div = document.createElement("div");
    ReactDOM.render(<Progress1></Progress1>, div)
})

it("renders without crushing", ()=>{
    const div = document.createElement("div");
    ReactDOM.render(<Progress2></Progress2>, div)
})
it("renders without crushing", ()=>{
    const div = document.createElement("div");
    ReactDOM.render(<Progress3></Progress3>, div)
})
it("renders without crushing", ()=>{
    const div = document.createElement("div");
    ReactDOM.render(<Progress4></Progress4>, div)
})
