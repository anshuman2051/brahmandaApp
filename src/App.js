import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import {createStore} from 'redux';
import LandingPage from './containers/landingPage/LandingPage';
import Asseble from './containers/assemble/Assemble';
import Launch from './containers/launch/Launch';
import reducer from './redux/reducer';


const store = createStore(reducer);

function App() {
  return (
    <Provider store={store}>
      <div className="App">    
          <Router>
          <Switch>         
          <Route
              path='/assemble'
              exact={true}
              render={(props) => (      
                <Asseble {...props}/>        
              )}
            />
            <Route
              path='/launch'
              exact={true}
              render={(props) => (      
                <Launch {...props}/>        
              )}
            />            
            <Route
              path='/'
              exact={true}
              render={(props) => (      
                <LandingPage {...props}/>        
              )}
            />            
          </Switch>  
        </Router>
      </div>
    </Provider>    
  );
}

export default App;
