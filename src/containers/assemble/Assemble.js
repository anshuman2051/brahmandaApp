import React from 'react';
import classes from './Assemble.module.css';
import DescriptionBox from './DescriptionBox';
import Rocket from './Rocket';


class Assemble extends React.Component {
    state = {
        data: [
            {
                name : "Aerodynamic Nose Cone",
                desc : "The nose cones are generally shaped to provide minimum aerodynamic drag in order to enhance the performance of the high-speed aerodynamic vehicles.",
                parts : [
                    {
                        name : "Rounded Nose",
                        desc : "If the speed of a rocket is less than the speed of sound, rounded nose is used",
                        image : require("../../res/round_nose.png"),
                        specs : [
                            [": None"],
                        ]

                    },
                    {
                        name : "Sharp Point Nose",
                        desc : "It is the best choice at supersonic speed of Rocket",
                        image : require("../../res/pointed_nose.png"),
                        specs : [
                            [": None"],
                        ]
                    }
                ]
            },
            {
                name : "Payload Fairings",
                desc : "A payload fairing is a nose cone used to protect a spacecraft payload against the impact of dynamic pressure and aerodynamic heating during launch through an atmosphere.",
                parts : [
                    {
                        name : "AE-FF-1",                        
                        image : require("../../res/AE-FF1_Airstream_Protective_Shell_(1.25m).png"),
                        specs : [
                            ["PAYLOAD TO LEO" , "22,800 kg"]
                        ]
                    },
                    {
                        name : "AE-FF-2",
                        image : require("../../res/AE-FF2_Airstream_Protective_Shell_(2.5m).png"),
                        specs : [
                            ["PAYLOAD TO LEO" , "140,000 kg"],
                        ]
                    }
                ]
            },
            {
                name : "Fuel + Oxidiser",
                parts : [
                    {
                        name : "Liq. H2 + Liq. O2",
                        desc : "Highly Efficient but difficult to handle",
                        image : require("../../res/transparent.png"),
                        specs : [
                            ["Density" , "70 kg/m^3"]
                        ]
                    },
                    {
                        name : "RP-1 + Liq.O2",
                        desc : "Less Efficient than liq. H2 but easy to handle.",
                        image : require("../../res/transparent.png"),
                        specs : [
                            ["Density" , "1000 kg/m^3"]
                        ]
                    }
                ]
            },
            {
                name : "Fuel Tank",
                parts : [
                    {
                        name : "First Stage ",
                        desc : "Capacity = 770,000 liters (fuel) + 1.2 million liters (oxidiser)",
                        image : require("../../res/fuel_first.png"),
                        specs : [
                            ["Capacity (Fuel)" , "770,000 L"],
                            ["Capacity (Oxidiser)" , "1.2 million L"],
                        ]
                    },
                    {
                        name : "Second Stage",
                        image : require("../../res/fuel_sec_small.png"),
                        specs : [
                            ["Capacity (Fuel)" , "770,000 L"],
                            ["Capacity (Oxidiser)" , "1.2 million L"]
                        ]
                    },
                    {
                        name : "Second Stage",
                        image : require("../../res/fuel_sec_big.png"),
                        specs : [
                            ["Capacity (Fuel)" , "990,000 L"],
                            ["Capacity (Oxidiser)" , "2 million L"]
                        ]
                    }
                ]
            },
            {
                name : "Engine",
                desc : "A rocket engine uses stored rocket propellants as the reaction mass for forming a high-speed propulsive jet of fluid, usually high-temperature gas.Basically, it produces the required thrust for the Rocket",
                parts : [
                    {
                        name : "Merlin",
                        image : require("../../res/engine1.png"),
                        specs : [
                            ["Thrust Force" , "845 kN"],
                        ]
                    },
                    {
                        name : "The F-1 Engine",
                        image : require("../../res/engine2.png"),
                        specs : [
                            ["Thrust Force" , "34000 kN"],
                        ]
                    }
                ]
            }
        ],
        selectedIndex: -1,
        rocketContents: []
    };

    handleClick = (evt) => {
        evt.persist()
        console.log(evt.target?.id);
        this.setState(prev => {
            return {
                selectedIndex: prev?.selectedIndex === evt.target?.id ? -1 : evt.target?.id
            };
        });
    }

    addPart = (part) => {
        this.setState(prev => {
            let partsArr = [...prev.rocketContents];

            switch (prev.selectedIndex) {
                case 0:
                    partsArr = [
                        part,
                        ...partsArr
                    ]
                    break;
                case 2:
                    partsArr = [
                        ...partsArr,
                        part,
                    ]
                    break;
                default:
                    if (partsArr?.length === 0) {
                        partsArr = [part];
                    }
                    else if (partsArr?.length === 1) {
                        partsArr = [
                            ...partsArr,
                            part,
                        ]
                    }
                    else {
                        partsArr = [
                            ...partsArr.slice(0, partsArr?.length - 1),
                            part,
                            partsArr[partsArr?.length - 1]
                        ]
                    }
            }
            return {
                rocketContents: partsArr
            };
        })
    }

    removePart = (key) => {
        this.setState(prev => {
            const partsArr = prev.rocketContents;
            partsArr.splice(key, 1);
            console.log(partsArr, key);
            return {
                rocketContents: partsArr
            }
        })
    }

    render() {
        return (
            <div className={classes.container}>
                <div className={classes.sideNav}>
                    <div className={classes.parts}>
                        {
                            this.state?.data?.map((data, key) => {
                                return (
                                    <div key={key} className={classes.partName} id={key} onClick={this.handleClick} >
                                        {data?.name}
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <div style={{ width: "100%" }} className={classes.contentBody}>
                    {
                        this.state.selectedIndex !== -1 ?
                            <div className={classes.desc}>
                                <DescriptionBox name="abc" partsData={this.state.data[this.state.selectedIndex]} addPart={this.addPart} />
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
                    onClick = { (this.state.rocketContents?.length ?  ()=>this.props.history.push({
                        pathname: "/launch",                        
                        state: this.state.rocketContents                        
                    }): null) }
                >
                    Launch !
                </center>
            </div>
        );
    }
}

export default Assemble;
