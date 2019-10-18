import React from 'react';
import Header from '../Header/Header';

class Wizard extends React.Component {
    render(){
        return(
            <div id='dashboard'>
                <Header/>
                <body id='dashboard-center'>
                    <div id="wizard-stuff">
                        <h1>Add New Listing</h1>
                        <form>
                            Property Name: <input/><br/><br/>

                            Address: <input/><br/><br/>

                            City: <input/><br/><br/>
                            
                            State: <input/><br/><br/>
                            
                            Zipcode: <input type="number"/><br/><br/>
                            
                            Home Image URL: <input/><br/><br/>
                            
                            Monthly Mortgage Amount: <input type="number"/><br/><br/>
                            
                            Desired Monthly Rent: <input type="number"/><br/><br/>
                        </form>

                        <div id='wizard-buttons'>
                            <button className='wz-button-1'>Cancel</button>
                            <button className='wz-button-2'>Create Listing</button>
                        </div>
                    </div>
                </body>
                
            </div>
        )
    }
}

export default Wizard;