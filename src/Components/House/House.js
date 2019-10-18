import React from 'react';
import {Link} from 'react-router-dom';
import Axios from 'axios';

class House extends React.Component {
    constructor(){
        super();

        this.state = {
            property_name: '',
            address: '',
            city: '',
            state: '',
            zip: '',
            monthly_mortgage: '',
            desired_rent: '',
            image: '',
        }
    }

    componentDidMount() {
        Axios
            .get('/read/house')
            .then(res => {
                console.log(res)
                this.setState({
                    property_name: res.data.property_name,
                    address: res.data.address,
                    city: res.data.city,
                    state: res.data.state,
                    zip: res.data.zip,
                    monthly_mortgage: res.data.monthly_mortgage,
                    desired_rent: res.data.desired_rent,
                    image: res.data.image,   
            })
            })}
    
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

                    <div id="box-creator">
                        <img src={this.state.image}/>
                        <p>Property Name: {this.state.property_name}</p>
                        <p>Address: {this.state.address}</p>
                        <p>City: {this.state.city}</p>
                        <p>State: {this.state.state}</p>
                        <p>Zip: {this.state.zip}</p>
                        <p>Monthly Mortgage: ${this.state.monthly_mortgage}</p>
                        <p>Desired Rent: ${this.state.desired_rent}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default House;