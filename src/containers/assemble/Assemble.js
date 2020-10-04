import React from 'react';
import classes from './Assemble.module.css';
import DescriptionBox from './DescriptionBox';
import Rocket from './Rocket';


class Assemble extends React.Component{
    state = {
        data : [
            {
                name : "Nose",
                parts : [
                    {
                        name : "nose 1",
                        desc : "adfssdfsdfsfsd",
                        image : require('../../res/fuel.png'),
                        specs : [
                            ["spec1" , "value"],
                            ["key2" , "value2"]
                        ]
                    },
                    {
                        name : "nose 2",
                        desc : "adfssdfsdfsfsd",
                        image : require('../../res/fuel.png'),
                        specs : [
                            ["spec1" , "value"],
                            ["key2" , "value2"]
                        ]
                    }
                ]
            },
            {
                name : "Fuel Tank",
                parts : [
                    {
                        name : "Oscar-B Fuel Tank",
                        desc : "The Oscar-B Fuel Tank provides fuel to attached liquid fuel engines.",
                        image : "https://wiki.kerbalspaceprogram.com/images/c/c1/Oscar-B_FT.png",
                        specs : [
                            ["mass" , "0.23t"],
                            ["drag" , "0.15-0.2"]                            
                        ]
                    }
                ]
            },
            {
                name : "Engine Type",
                parts : [
                    {
                        name : "nose 1",
                        desc : "adfssdfsdfsfsd",
                        image : "https://wiki.kerbalspaceprogram.com/images/c/c1/Oscar-B_FT.png",
                        specs : [
                            ["spec1" , "value"],
                            ["key2" , "value2"]
                        ]
                    }
                ]
            },
            {
                name : "Nozzle",
                parts : [
                    {
                        name : "nose 1",
                        desc : "adfssdfsdfsfsd",
                        image : "https://wiki.kerbalspaceprogram.com/images/c/c1/Oscar-B_FT.png",
                        specs : [
                            ["spec1" , "value"],
                            ["key2" , "value2"]
                        ]
                    }
                ]
            }
        ],
        selectedIndex : -1,
        rocketContents : []
    };

    handleClick = (evt)=>{    
        evt.persist()        
        console.log(evt.target?.id);    
        this.setState(prev =>{                        
            return {                
                selectedIndex: prev?.selectedIndex === evt.target?.id ? -1 : evt.target?.id
            };
    });
    }

    addPart = ( part ) =>{                
        this.setState( prev=>{
            let partsArr = [...prev.rocketContents];

            switch( prev.selectedIndex){
                case 0 :
                    partsArr = [
                        part,
                        ...partsArr
                    ]
                    break;
                case 2 : 
                    partsArr = [                     
                        ...partsArr,
                        part,
                    ]
                    break;
                default:
                    if( partsArr?.length === 0){
                        partsArr = [part];
                    }
                    else if( partsArr?.length === 1){
                        partsArr = [                     
                            ...partsArr,
                            part,
                        ]
                    }
                    else{
                        partsArr = [
                            ...partsArr.slice(0,partsArr?.length - 1),
                            part,
                            partsArr[partsArr?.length - 1]
                        ]
                    }    
            }
            return {
                rocketContents : partsArr
            };
        })
    }

    removePart = (key)=>{        
        this.setState( prev=>{
            const partsArr = prev.rocketContents;                
            partsArr.splice(key, 1);
            console.log(partsArr, key);
            return {
                rocketContents : partsArr
            }
        })        
    }

    render(){
        return(
            <div className={classes.container}>
                <div className={classes.sideNav}>
                    <div className={classes.parts}>
                        {
                            this.state?.data?.map( (data, key)=>{
                                return (
                                    <div key={key} className={classes.partName} id={key} onClick={this.handleClick} >
                                        {data?.name}
                                    </div>                                    
                                )
                            })
                        }                        
                    </div>                    
                </div>
                <div style={{width:"100%"}} className={classes.contentBody}> 
                    {
                        this.state.selectedIndex !== -1?
                        <div className={classes.desc}>
                            <DescriptionBox name="abc" partsData={this.state.data[this.state.selectedIndex]} addPart={this.addPart}/>                        
                        </div>                    
                        :
                        null
                    }
                </div>     
                <div className={classes.rocketContainer}>
                    <Rocket data={this.state?.rocketContents} removePart={this.removePart}/>
                </div>                    
                                   
                <center 
                    className={classes.launchBtn + (this.state.rocketContents?.length ? "" :  (" ab "+ classes.disabled))}
                    onClick = { (this.state.rocketContents?.length ?  ()=>this.props.history.push("/launch"): null) }
                >
                    Launch !
                </center>                                
            </div>
        );
    }
}

export default Assemble;
