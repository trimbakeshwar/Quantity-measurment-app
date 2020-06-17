
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



export class Home extends Component {

    constructor(props){
        super(props);
        this.state={
           
            ValueOne:"",
            ValueOneUnit :"",
            valueTwo:"",
            ValueTwoUnit:"",
            volumeImg:'beakerInactive',
            lengthImg:"scaleActive",
            tempratureImg:'hotInactive',
            lengthActive:true,
            volumeActive:false,
            temperatureActive:false,
            lengthContainer:"lengthContainer",
            volumeContainer:"volumeContainer",
            temperatureContainer:"temperatureContainer"
        }
    }
    // on change handler for units
    onChangeHandler = eve =>{
        eve.preventDefault()  
        this.setState({[eve.target.name]:eve.target.value})
    }    
   
    // on temparature svg image click handler
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
    
    render() {
        let measurementType=""
        // Units
        const VolumeUnits =[{value:'MI' , lable:'Ml'},{value:'LITER'}, {value:'GALLON' }]
        const LengthUnits=[{ value:'CM'}, {value:'INCH'},{value:'FEET' },{value:'YARD' } ]
        const temperatureUnits=[ {value:'C'} , {value:'F'} ]
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
            <div className ='HomepageBody'>
                <UpperBar/>
                <Header/>
                <div className="homeContainer">
                    <div id="chooseTypeStyle"><label >ChooseType</label> </div><br/>
                    <div  id="ImageContainer">                        
                        <div className={this.state.lengthContainer} onMouseEnter={this.onLength} onMouseLeave={this.offLenth} onClick={this.clickLength}> 
                            <div><img className={this.state.lengthImg}/></div>  
                            <div ><label>Length</label></div>
                        </div>         
                        
                        <div className={this.state.temperatureContainer} onMouseOver={this.onTempareature} onMouseLeave={this.offTempareature} onClick={this.clickTemparature}> 
                            <img className={this.state.tempratureImg}/> <br/>
                            <div ><label>Temperature</label></div>
                        </div>  
                        <div className={this.state.volumeContainer} onMouseOver={this.onVolume} onMouseLeave={this.offVolume} onClick={this.clickVolume}> 
                            <img className={this.state.volumeImg}/> <br/>
                            <div ><label>Volume</label></div>
                        </div>                 
                    </div>
                    
                
                      
                        </div>
                    </div>
                //</div>

            //</div>
        );
    }
}

export default Home;