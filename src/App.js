import React from 'react'
import Navbar from './Component/Navbar/Navbar'
import Sidebar from './Component/Sidebar/Sidebar'

import InfoContainer from './Component/Info/InfoContainer'
import Middle from './Box/Middle'
import { Grid } from '@material-ui/core'
import './style.css'
const App = () => {
    

    return (
        <div className="main-content">
             <div>
                <Grid container>
                    <Grid item md={12}>
                        <Navbar/>
                    </Grid>
                </Grid>
            </div>
            <div className="container1">
                <div className="sidebar">
                    <Sidebar />
                </div> 
            <Grid container spacing={3} className="gridd">
                <Grid Item md={9}>
                    <Middle/>
                </Grid>
                <Grid Item md={3}>
                    <InfoContainer/>
                </Grid>
            </Grid>
           </div> 
        </div>
    )
}

export default App
