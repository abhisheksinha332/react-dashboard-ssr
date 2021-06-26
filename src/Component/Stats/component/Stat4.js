import React from 'react'
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import '../Stat.css'
const Stat2 = () => {
    return (
        <div className="containerss">
            <div className="paper">
                <div className="header">
                    Applications
                </div>
                <div className="imp">
                    <TrendingUpIcon/>+12.00%
                </div>
                <div className="digit">
                    0564
                </div>
            </div>
        </div>
    )
}

export default Stat2
