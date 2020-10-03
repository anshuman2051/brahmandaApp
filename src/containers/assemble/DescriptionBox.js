import React from 'react';
import classes from './Assemble.module.css';


const PartDesc = props=>{
    return (
        <div className={classes.partDesc}  onClick={()=>props.addPart(props.data)}>
            <div>
                <div>{props.data?.name}</div>
                <p>
                    {props.data.desc}
                </p>
                <div>
                    <div>Specs</div>
                    {
                        props?.data?.specs?.map( (spec,key) =>{
                            return <div key={key}>
                                <span> {spec[0]}</span> : <span> {spec[1]}</span>
                            </div>
                        })
                    }
                </div>
            </div>            
            <img 
            alt="imagePic" 
            src={props.data?.image}
            />                        
        </div>
    );
}

const DescriptionBox =(props)=>{
    return(
        <div className={classes.descriptionBox}>  
            {
                props.partsData?.parts?.map( (partData, key)=>{
                    return <PartDesc key={key} id={key} data={partData} addPart={props.addPart}/>;                    
                })
            }  
        </div>
    );    
}

export default DescriptionBox;
