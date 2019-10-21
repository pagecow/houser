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
                this.setState({
                    list: res.data
            })
    })}

    handleDelete = (id) => {
        Axios
            .delete(`/delete/house/${id}`)

    }

    newGetRequest = () => {
        Axios
            .get('/read/house')
            .then(res => {
                this.setState({
                    list: res.data
            })
    })}
    
    render(){
        const {list} = this.state;
        console.log(list)
        return(
            <div id='dashboard-center'>
                <div className='dashboard-center-top'>
                    <p id='dashboard-title'>Dashboard</p>
                    {/* <br></br> */}
                    <Link to='/wizard'><button id='dashboard-button'>Add New Property</button></Link>
                </div>

                <div className='dashboard-center-bottom'>
                    <h3>Home Listings</h3>

                    {list.map(house => 
                        <div id="box-creator">
                            <img className='house-image'src={house.image}/>
                            <div className='house-description'>
                                <p>Property Name: {house.property_name}</p>
                                <p>Address: {house.address}</p>
                                <p>City: {house.city}</p>
                                <p>State: {house.state}</p>
                                <p>Zip: {house.zip}</p>
                                <p>Monthly Mortgage: ${house.monthly_mortgage}</p>
                                <p>Desired Rent: ${house.desired_rent}</p>
                            </div>
                            <button onClick={() => {this.handleDelete(house.id); this.newGetRequest()}} className='house-delete-button'>X</button>
                        </div>
                    )}
                </div>
            </div>
        )
    }
}

export default House;