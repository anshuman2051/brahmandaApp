import React from 'react';
import classes from './Rocket.module.css';

class Rocket extends React.Component{
    render(){
        return(
            <div className={classes.container}>
                {
                    this.props.data?.map( (part, key)=>{
                        return <img  className={classes.partImg} key={key} alt="partImg" src={part.image} onClick={()=>this.props.removePart(key)}/>;
                    })
                }                
            </div>
        );
    }
}

export default Rocket;