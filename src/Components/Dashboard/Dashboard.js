import React from 'react';
import {HashRouter as Router, Route, Switch } from 'react-router-dom';
import Header from '../Header/Header';

import House from '../House/House';

class Dashboard extends React.Component {
    
    
    render(){
        return(
            <div>
                <Header/>
                <div id='dashboard'>
                    <body id='dashboard-center'>
                        <House/>
                    </body>
                </div>
            </div>
        )
    }
}

export default Dashboard;