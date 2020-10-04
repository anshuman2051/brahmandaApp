import React from 'react';
import classes from './Launch.module.css'
import { TimelineLite, CSSPlugin } from "gsap/all";

class Launch extends React.Component{
    constructor(props){
        super(props);
        this.rocketRef = React.createRef();
        this.rocketTween = null;
    }

    state = {
        data : null,   
        planets : [
            {
                name : "sun",
                x : "60",
                y : "170",                
                height : "120px",
                width: "120px",
                img : require('../../res/planets/sun.png')

            },
            {
                name : "mercury",
                x : "260",
                y : "212",                
                height : "25px",
                width: "25px",
                img : require('../../res//planets/mercury.png')
            },
            {
                name : "venus",
                x : "310",
                y : "215",                
                height : "30px",
                width: "30px",
                img : require('../../res//planets/venus.png')
            },
            {
                name : "earth",
                x : "380",
                y : "210",                
                height : "40px",
                width: "40px",
                img : require('../../res//planets/earth.png')
            },
            {
                name : "mars",
                x : "410",
                y : "240",                
                height : "60px",
                width: "60px",
                img : require('../../res//planets/mars.png')
                
            },
            {
                name : "jupiter",
                x : "640",
                y : "210",                
                height : "90px",
                width: "90px",
                img : require('../../res//planets/jupiter.png')
            },
            {
                name : "saturn",
                x : "720",
                y : "80",                
                height : "150px",
                width: "150px",
                img : require('../../res//planets/saturn.png')
            },
            {
                name : "uranus",
                x : "1020",
                y : "140",                
                height : "90px",
                width: "90px",
                img : require('../../res//planets/uranus.png')
            },
            {
                name : "neptune",
                x : "1150",
                y : "200",                
                height : "110px",
                width: "80px",
                img : require('../../res//planets/neptune.png')
            }

        ],        
        destination : null
    }
    

    componentDidMount = ()=>{
        this.setState({ data : this.props?.location?.state});
        this.rocketTween = new TimelineLite({ paused:true }).to(this.rocketRef?.current, 2 , {x : "100"});
        // this.rocketTween
        //     .to(this.rocketRef, 2 , {display : "none"});
    }

    render(){

        let destination = this.state.destination;
        let width = null;
        let height = null
        if( destination){            
            width = +destination.width?.slice(0,destination.width?.length-2);
            height = +destination.height?.slice(0,destination.height?.length-2);
        }

        return(
            <div className={classes.container}>
                <center style={{color: "white"}}>
                    <h3 style={{paddingTop:"32px", marginTop:"0"}}>
                        Launch Page !
                    </h3>
                </center>
                <div style={{color:"white"}}>
                    <span> Destination :  </span> 
                    {
                        destination ? <span>{destination?.name}</span> : "Select a Destination on Map"
                    }
                </div>
                <svg width="100%" height="100%" className={classes.svg} >                                                       
                    {/* <path d="M0,50 C0,50 500,60  0,150 " className={classes.orbit}/>
                    <path d="M0,40 C0,40 550,60  0,160 " className={classes.orbit}/>*/}
                    
                    {/* <path fill="none" stroke="red"
                        d="M 0,50
                        A 150 50 0 1 0 0 0" /> */}
                    <ellipse cx="125" cy="225" rx="150" ry="70" className={classes.orbit}/>
                    <ellipse cx="125" cy="225" rx="200" ry="90" className={classes.orbit}/>
                    {/* earth */}
                    <ellipse cx="100" cy="225" rx="300" ry="100" className={classes.orbit}/>
                    {/* mars */}
                    <ellipse cx="100" cy="225" rx="370" ry="125" className={classes.orbit}/>                    

                    {/* exo planets */}
                    <ellipse cx="100" cy="225" rx="600" ry="160" className={classes.orbit}/>
                    <ellipse cx="100" cy="225" rx="750" ry="170" className={classes.orbit}/>
                    <ellipse cx="100" cy="225" rx="1000" ry="180" className={classes.orbit}/>
                    <ellipse cx="100" cy="225" rx="1100" ry="220" className={classes.orbit}/>



                    {/* path of rocket */}
                    {
                        destination ?
                                <path 
                                    d={`M${400 },${230} C${400},${230} ${(Math.floor(+destination?.x + 380)/2)},${  Math.max(+destination?.y , 210) - (100 + 1.6* width)}  ${+destination?.x + width/2},${+destination?.y + height/2}`} 
                                    className={classes.route}/> 
                            :
                                null
                    }                    
                    {
                        this.state.planets?.map( planet =>{
                            return <image 
                                        key={planet?.name} 
                                        href={planet?.img} 
                                        x={planet?.x} 
                                        y={planet?.y} 
                                        height={planet?.height} 
                                        width={planet?.width} 
                                        onClick={()=> this.setState({destination : planet})}
                                        style={{cursor:"pointer"}}
                                    />
                        })
                    }
                    {
                        // rocket
                        destination || true?
                            <image x="380" y = "210" width="20px" height="60px" href={require('../../res/rocket.png')} ref={this.rocketRef} />
                        :
                            null
                    }

                </svg>
                <center 
                    className={classes.launchBtn + ( destination ? "" :  (" "+ classes.disabled))}
                    onClick={()=>this.rocketTween?.play()}
                >
                    GO !
                </center>
            </div>
        );
    }
}

export default Launch;