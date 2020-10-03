import React from 'react';
import classes from './Assemble.module.css';


const PartDesc = props=>{
    return (
        <div className={classes.partDesc}>
            <div>
                <div>{props.data?.name}</div>
                <p>
                    {props.data.desc}
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
            {
                props.partsData?.parts?.map( (partData, key)=>{
                    return <PartDesc key={key} id={key} data={partData} />;
                })
            }  
        </div>
    );    
}

export default DescriptionBox;
