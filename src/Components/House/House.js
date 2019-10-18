import React from 'react';
import {Link} from 'react-router-dom';

class House extends React.Component {
    constructor(){
        super();

        this.state = {
            
        }
    }
    
    render(){
        return(
            <div id='dashboard-center'>
                <div className='dashboard-center-top'>
                    <p id='dashboard-title'>Dashboard</p>
                    {/* <br></br> */}
                    <Link to='/wizard'><button id='dashboard-button'>Add New Property</button></Link>
                </div>

                <div className='dashboard-center-bottom'>
                    <h3>Home Listings</h3>

                </div>

            </div>
        )
    }
}

export default House;