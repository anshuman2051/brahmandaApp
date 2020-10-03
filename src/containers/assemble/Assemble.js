import React from 'react';
import classes from './Assemble.module.css';

const EnginePart =(props)=>{
    return(
        <div className={classes.enginePart}>
            <img 
                alt="imagePic" 
                src="https://wiki.kerbalspaceprogram.com/images/c/c1/Oscar-B_FT.png"
                />
            <span>{props.name}</span>
        </div>
    );    
}

class Assemble extends React.Component{
    render(){
        return(
            <div className={classes.container}>
                <div className={classes.sideNav}>
                    <div className={classes.parts}>

                    </div>
                    <div className={classes.engines}>
                        <EnginePart name="abc"/>
                        <EnginePart name="def"/>
                    </div>
                    <div className={classes.fuelTanks}>

                    </div>                    
                </div>
            </div>
        );
    }
}

export default Assemble;