import React from 'react';
import classes from './Assemble.module.css';

const PartDesc = props=>{
    return (
        <div className={classes.partDesc}>
            <div>
                <div>{props.name}</div>
                <p>
                    This is a sample description...
                </p>
            </div>            
            <img 
            alt="imagePic" 
            src="https://wiki.kerbalspaceprogram.com/images/c/c1/Oscar-B_FT.png"
            />                        
        </div>
    );
}

const DescriptionBox =(props)=>{
    return(
        <div className={classes.descriptionBox}>    
            <PartDesc name="desc1"/>
            <PartDesc name="desc1"/>
            <PartDesc name="desc1"/>           
        </div>
    );    
}


const Part = props=>{
    return(
        <div className={classes.partName}>
            Nose
        </div>
    );
}

class Assemble extends React.Component{
    render(){
        return(
            <div className={classes.container}>
                <div className={classes.sideNav}>
                    <div className={classes.parts}>
                        <Part/>
                        <Part/>
                        <Part/>
                        <Part/>
                    </div>                    
                </div>
                <div>
                    <div className={classes.desc}>
                            <DescriptionBox name="abc"/>                        
                    </div>                    
                </div>                
            </div>
        );
    }
}

export default Assemble;