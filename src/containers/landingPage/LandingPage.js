import React from 'react';
import SideBar from "./sidebar";
import './LandingPage.css';

<<<<<<< HEAD
=======

>>>>>>> 6bd365bf6e294b9d6e5a0aad2dd614895031121f
class LandingPage extends React.Component {
    render() {
        return ( 
            <div id="App" className = 'Login-component'>
                <div align="right"><SideBar pageWrapId={"page-wrap"} outerContainerId={"App"} /></div>
            <div id="page-wrap">
            <h1 className = 'body-font'> Brahmanda </h1>
            </div>
          </div>

        );
    }
}

export default LandingPage;