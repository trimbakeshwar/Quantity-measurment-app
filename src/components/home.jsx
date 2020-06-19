
import UpperBar from "../components/upperBar"
import Header from "../components/heder"
import Inactivehot from "../image/hot-1.svg"
import activehot from "../image/hot.svg"
import Inactivelength from "../image/scale-1.svg"
import activelength from "../image/scale.svg"
import Inactivebeaker from "../image/beaker1.svg"
import activebeaker from "../image/beaker.svg"
import "../CSS/homelayout.css";
import React, { Component } from 'react';
import{TextField,MenuItem,Select }from '@material-ui/core';
import QuantityType from "../components/quantitytype"

export class Home extends Component {

    constructor(props){
        super(props);
        this.state={
           
           
            lengthImg:"scaleActive",
            lengthActive:true,
            lengthContainer:"lengthContainer",
            volumeImg:'beakerInactive',
            volumeActive:false,
            tempratureImg:'hotInactive',   
            volumeContainer:"volumeContainer",
            temperatureActive:false,        
            temperatureContainer:"temperatureContainer"
        }
    }

   /* onChangeHandler = eve =>{
        eve.preventDefault()  
        this.setState({[eve.target.name]:eve.target.value})
    }    
   */
     clickLength=eve=>{
        this.setState({
            lengthActive:true, 
            lengthImg:"scaleActive",
            temperatureContainer:"imageContainer",
            volumeActive:false,
            volumeContainer:"imageContainer",
            volumeImg:'beakerInactive',
            temperatureActive:false,
            tempratureImg:"hotInactive",
            lengthContainer:"lengthContainer",
        })
    }
    MousonLength = eve =>{
        this.setState({
            lengthImg:"scaleActive",
            lengthContainer:'lengthContainer'
        })
    }

    MouseLeaveLength= eve =>{
        if(this.state.lengthActive === false){
            this.setState({
                lengthImg:"scaleInactive",
                lengthContainer:"imageContainer"
            })
        }
    }
    clickVolume=eve=>{
        this.setState({
            lengthActive:false, 
            lengthImg:"scaleInactive",
            lengthContainer:"imageContainer",
            volumeActive:true,
            temperatureContainer:"imageContainer",
            volumeImg:'beakerActive',
            temperatureActive:false,
            tempratureImg:"hotInactive",
            volumeContainer:"volumeContainer",
        })
    }
    MousonVolume = eve =>{
        this.setState({
            volumeImg:"beakerActive",
            volumeContainer:'volumeContainer'
        })
    }

    MouseLeaveVolume= eve =>{
        if(this.state.volumeActive === false){
            this.setState({
                volumeImg:"beakerInactive",
                volumeContainer:"imageContainer"
            })
        }
    }
    clickTemparature=eve=>{
        this.setState({
            lengthActive:false, 
            lengthImg:"scaleInactive",
            lengthContainer:"imageContainer",
            volumeActive:false,
            volumeContainer:"imageContainer",
            volumeImg:'beakerInactive',
            temperatureActive:true,
            tempratureImg:"hotActive",
            temperatureContainer:"temperatureContainer",
        })
    }
    MousonTempareature = eve =>{
        this.setState({
            tempratureImg:"hotActive",
            temperatureContainer:'temperatureContainer'
        })
    }

    MouseLeaveTempareature= eve =>{
        if(this.state.temperatureActive === false){
            this.setState({
                tempratureImg:"hotInactive",
                temperatureContainer:"imageContainer"
            })
        }
    }
    
    render() {
        let measurementType=""
        // Units
        const VolumeUnits =[{value:'LITRE'},{value:'MILLILITER'}, {value:'GALLON' }]
        const LengthUnits=[{ value:'CM'}, {value:'INCH'},{value:'FEET' },{value:'YARD' } ]
        const temperatureUnits=[ {value:'FAHRENHEIT'} , {value:'CELSIUS'} ]
        if(this.state.volumeActive){
            measurementType=VolumeUnits;
        }
        else if (this.state.temperatureActive){
            measurementType=temperatureUnits;
        }
        else{
            measurementType=LengthUnits;
        }
       
        return (
            <div className ='Body'>
                <UpperBar/>
                <Header/>
                <div className="homeContainer">
                    <div  id="chooselable" ><label>ChooseType</label> </div><br/>
                    <div  id="ImageContainer">                        
                        <div className={this.state.lengthContainer} onMouseEnter={this.MousonLength} onMouseLeave={this.MouseLeaveLength} onClick={this.clickLength}> 
                            <div><img className={this.state.lengthImg}/></div>  
                            <div ><label>Length</label></div>
                        </div>         
                        
                        <div className={this.state.temperatureContainer} onMouseOver={this.MousonTempareature} onMouseLeave={this.MouseLeaveTempareature} onClick={this.clickTemparature}> 
                            <img className={this.state.tempratureImg}/> <br/>
                            <div ><label>Temperature</label></div>
                        </div>  
                        <div className={this.state.volumeContainer} onMouseOver={this.MousonVolume} onMouseLeave={this.MouseLeaveVolume} onClick={this.clickVolume}> 
                            <img className={this.state.volumeImg}/> <br/>
                            <div ><label>Volume</label></div>
                        </div>                 
                    </div>
                    <QuantityType options={measurementType}></QuantityType>
                   
                </div>
            </div>

            
        );
    }
}

export default Home;
// <QuantityType values={this.measurementType}/>
/* <div id="containerForData">                        
                        <div >
                            <lable id="text">FROM</lable><br/><br/>
                            <TextField className="TextField" type="number" variant="outlined" size="small" value={this.state.valueOne} /><br/>
                            <Select id="Select" value={this.state.ValueOneUnit} onChange={this.onChangeHandler} >
                                {measurementType.map( (units) => ( 
                                    <MenuItem  key={units.value} value={units.value} >{units.value}</MenuItem>
                                ))}
                            </Select>
                        </div>
                        <div>
                            <lable id="text">TO</lable><br/><br/>
                            <TextField className="TextField" type="number" variant="outlined" size="small" value={this.state.valueTwo} /><br/>
                            <Select id="Select" value={this.state.ValueTwoUnit} onChange={this.onChangeHandler} >
                                {measurementType.map( (units) => ( 
                                    <MenuItem  key={units.value} value={units.value} >{units.value}</MenuItem>
                                ))}
                            </Select>
                        </div>
                    </div> */