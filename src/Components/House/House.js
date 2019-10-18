import React from 'react';
import {Link} from 'react-router-dom';

class House extends React.Component {
    render(){
        return(
            <div id='dashboard-center'>
                <div className='dashboard-center-top'>
                    <p id='dashboard-title'>Dashboard</p>
                    {/* <br></br> */}
                    <button id='dashboard-button'>Add New Property</button>
                </div>

                <div className='dashboard-center-bottom'>
                    <h3>Home Listings</h3>
                </div>

            </div>
        )
    }
}

export default House;