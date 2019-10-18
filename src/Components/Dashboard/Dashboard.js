import React from 'react';
import {HashRouter as Router, Route, Switch } from 'react-router-dom';
import Header from '../Header/Header';

import House from '../House/House';

class Dashboard extends React.Component {
    render(){
        return(
            <div id='dashboard'>
                <Header/>

                <body>
                    <House/>
                </body>
            </div>
        )
    }
}

export default Dashboard;