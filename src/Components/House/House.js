import React from 'react';
import {Link} from 'react-router-dom';
import Axios from 'axios';

class House extends React.Component {
    constructor(){
        super();

        this.state = {
            list: []
        }
        
    }

    componentDidMount = () => {
        Axios
            .get('/read/house')
            .then(res => {
                console.log(res)
                this.setState({
                    ...this.state.list,
                    list: res.data
            })
    })}
    
    render(){
        const list = this.state.list;
        
        return(
            <div id='dashboard-center'>
                <div className='dashboard-center-top'>
                    <p id='dashboard-title'>Dashboard</p>
                    {/* <br></br> */}
                    <Link to='/wizard'><button id='dashboard-button'>Add New Property</button></Link>
                </div>

                <div className='dashboard-center-bottom'>
                    <h3>Home Listings</h3>

                <ul>
                    {list.map(house => 
                        <div id="box-creator">
                            <img src={house.image}/>
                            <p>Property Name: {house.property_name}</p>
                            <p>Address: {house.address}</p>
                            <p>City: {house.city}</p>
                            <p>State: {house.state}</p>
                            <p>Zip: {house.zip}</p>
                            <p>Monthly Mortgage: ${house.monthly_mortgage}</p>
                            <p>Desired Rent: ${house.desired_rent}</p>
                        </div>
                    )}
                </ul>
                
                </div>
            </div>
        )
    }
}

export default House;