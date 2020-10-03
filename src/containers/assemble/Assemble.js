import React from 'react';
import classes from './Assemble.module.css';
import DescriptionBox from './DescriptionBox';


class Assemble extends React.Component{
    state = {
        data : [
            {
                name : "Nose",
                parts : [
                    {
                        name : "nose 1",
                        desc : "adfssdfsdfsfsd",
                        specs : [
                            {"key" : "value"},
                            {"key2" : "value2"}
                        ]
                    }
                ]
            },
            {
                name : "Fuel Tank",
                parts : [
                    {
                        name : "nose 1",
                        desc : "adfssdfsdfsfsd",
                        specs : [
                            {"key" : "value"},
                            {"key2" : "value2"}
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
                        specs : [
                            {"key" : "value"},
                            {"key2" : "value2"}
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
                        specs : [
                            {"key" : "value"},
                            {"key2" : "value2"}
                        ]
                    }
                ]
            }
        ],
        selectedIndex : -1
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
                <div style={{width:"100%"}}> 
                    {
                        this.state.selectedIndex !== -1?
                        <div className={classes.desc}>
                            <DescriptionBox name="abc" partsData={this.state.data[this.state.selectedIndex]}/>                        
                        </div>                    
                        :
                        null
                    }
                    
                </div>                    
                <center className={classes.launchBtn}>Launch !</center>                                
            </div>
        );
    }
}

export default Assemble;