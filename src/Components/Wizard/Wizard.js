import React from 'react';
import Header from '../Header/Header';
import {Link} from 'react-router-dom';
import Axios from 'axios';

class Wizard extends React.Component {
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

    handlePropChange = (value) => {
        this.setState({
            property_name: value
        })
    }
    handleAddChange = (value) => {
        this.setState({
            address: value
        })
    }
    handleCityChange = (value) => {
        this.setState({
            city: value
        })
    }
    handleStateChange = (value) => {
        this.setState({
            state: value
        })
    }
    handleZipChange = (value) => {
        this.setState({
            zip: value
        })
    }
    handleMonChange = (value) => {
        this.setState({
            monthly_mortgage: value
        })
    }
    handleDesChange = (value) => {
        this.setState({
            desired_rent: value
        })
    }
    handleImChange = (value) => {
        this.setState({
            image: value
        })
    }

    
    handlePost = () => {
        Axios
            .post('/create/house', {
                property_name: this.state.property_name,
                address: this.state.address,
                city: this.state.city,
                state: this.state.state,
                zip: this.state.zip,
                monthly_mortgage: this.state.monthly_mortgage,
                desired_rent: this.state.desired_rent,
                image: this.state.image,
            })
            .then(res => {console.log(res)})
            .catch(err => {console.log(err.response)})
    }


    
    render(){
        return(
            <div id='dashboard'>
                <Header/>
                <body id='dashboard-center'>
                    <div id="wizard-stuff">
                        <h1>Add New Listing</h1>
                        <form>
                            Property Name: <input onChange={e => this.handlePropChange(e.target.value)}/><br/><br/>

                            Address: <input onChange={e => this.handleAddChange(e.target.value)}/><br/><br/>

                            City: <input onChange={e => this.handleCityChange(e.target.value)}/><br/><br/>
                            
                            State: <input onChange={e => this.handleStateChange(e.target.value)}/><br/><br/>
                            
                            Zipcode: <input type="number" onChange={e => this.handleZipChange(e.target.value)}/><br/><br/>
                            
                            Monthly Mortgage Amount: <input type="number" onChange={e => this.handleMonChange(e.target.value)}/><br/><br/>
                            
                            Desired Monthly Rent: <input type="number" onChange={e => this.handleDesChange(e.target.value)}/><br/><br/>

                            Home Image URL: <input onChange={e => this.handleImChange(e.target.value)}/><br/><br/>
                        </form>

                        <div id='wizard-buttons'>
                            <Link to='/'><button className='wz-button-1'>Cancel</button></Link>
                            <Link to='/'>
                                <button className='wz-button-2' onClick={this.handlePost}>Create Listing</button>
                            </Link>
                        </div>
                    </div>
                </body>
                
            </div>
        )
    }
}

export default Wizard;