import React from 'react'
import TotalApplication from '../Component/Total1/TotalApplication'
import Shortlisted from '../Component/Shortlisted/Shortlisted'
import Total from '../Component/Total2/Total2'
import PieContainer from '../Component/PieChart/PieContainer'
import GraphContainer from '../Component/Graph/GraphContainer'
import ProgressContainer from '../Component/Progress/ProgressContainer'
import StatContainer from '../Component/Stats/StatContainer'
import { Grid } from '@material-ui/core'
import './middle.css'
const Middle = () => {
    return (
        <div>
           
            <div className="app">
            <Grid container spacing={2}>
                <Grid item md={4}>
                    <TotalApplication/>
                </Grid>
                <Grid item md={4}>
                    <Shortlisted/>
                </Grid>
                <Grid item md={4}>
                    <Total/>
                </Grid>
            </Grid>
            </div>
            <div>
                <Grid container spacing={2}>
                    <Grid item md={8}>
                        <GraphContainer/>
                    </Grid>
                    <Grid item md={4}>
                        <ProgressContainer/>
                    </Grid>
                </Grid>
            </div>
            <div>
                <Grid container spacing={2}>
                    <Grid item md={8}>
                        <StatContainer/>
                    </Grid>
                    <Grid item md={4}>
                        <PieContainer/>
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default Middle
