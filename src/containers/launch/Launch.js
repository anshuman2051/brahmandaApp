import React from 'react';
import classes from './Launch.module.css'

class Launch extends React.Component{
    state = {
        data : null
    }

    componentDidMount = ()=>{
        this.setState({ data : this.props?.location?.state})
    }

    render(){
        return(
            <div className={classes.container}>
                <center style={{color: "white"}}>
                    <h3 style={{paddingTop:"32px", marginTop:"0"}}>
                        Launch Page !
                    </h3>
                </center>
                <svg width="100%" height="100%" className={classes.svg} >                                                       
                    {/* <path d="M0,50 C0,50 500,60  0,150 " className={classes.orbit}/>
                    <path d="M0,40 C0,40 550,60  0,160 " className={classes.orbit}/>
                    <path d="M0,20 C0,20 750,60  0,180 " className={classes.orbit}/> */}
                    {/* <path fill="none" stroke="red"
                        d="M 0,50
                        A 150 50 0 1 0 0 0" /> */}
                    <ellipse cx="125" cy="225" rx="150" ry="70" className={classes.orbit}/>
                    <ellipse cx="125" cy="225" rx="200" ry="90" className={classes.orbit}/>
                    <ellipse cx="100" cy="225" rx="300" ry="100" className={classes.orbit}/>
                    {/* mars */}
                    <ellipse cx="100" cy="225" rx="500" ry="150" className={classes.orbit}/>                    

                    {/* exo planets */}
                    <ellipse cx="100" cy="225" rx="600" ry="160" className={classes.orbit}/>
                    <ellipse cx="100" cy="225" rx="750" ry="170" className={classes.orbit}/>
                    <ellipse cx="100" cy="225" rx="1000" ry="180" className={classes.orbit}/>
                    <ellipse cx="100" cy="225" rx="1100" ry="220" className={classes.orbit}/>

                    <image href={require('../../res/planets/mars.png')} x="100" y = "200" height="50px" width="50px"/>                    
                    <image href={require('../../res//planets/mars.png')} x="260" y = "212" height="25px" width="25px"/>                    
                    <image href={require('../../res//planets/mars.png')} x="310" y = "215" height="30px" width="30px"/>                    
                    <image href={require('../../res//planets/mars.png')} x="380" y = "210" height="40px" width="40px"/>                    
                    <image href={require('../../res//planets/mars.png')} x="540" y = "240" height="60px" width="60px"/>                    
                    <image href={require('../../res//planets/mars.png')} x="640" y = "210" height="70px" width="70px"/>                    
                </svg>
            </div>
        );
    }
}

export default Launch;