import React, { Component } from 'react';
import{TextField,MenuItem,Select }from '@material-ui/core';
import "../CSS/quantity.css"
import AxiosService from "../services/axio-services";
import Config from '../services/configer-services';
const axio = new AxiosService();

export  default class QuantityType extends Component{
    constructor(props){
        super(props)
        this.state={

            ValueOne:0,
            ValueOneUnit :"",
            valueTwo:0,
            ValueTwoUnit:"",
        }

    }
    onChangeHandler = eve =>{
        eve.preventDefault()  
        this.setState({[eve.target.name]:eve.target.value})
    }    
    
    operationWithValueOne = eve  =>{     

        eve.preventDefault()   
        this.setState({
            valueOne:eve.target.value
        })        
        let dataObj= {
            "value": eve.target.value,
            "operationType": this.state.ValueOneUnit+"_TO_"+this.state.ValueTwoUnit
            }   
        axio.AddData(Config.url,dataObj)
        .then(response=>{
            console.log("output",response)
            this.setState({
                valueTwo:response.data.data.result
            })
            console.log(this.state)
          })
          .catch(error=>{
            console.log(error)
          })
    }
     operationWithValueOne = eve  =>{     

        eve.preventDefault()   
        this.setState({
            valueOne:eve.target.value
        })        
        let dataObj= {
            "value": eve.target.value,
            "operationType": this.state.ValueOneUnit+"_TO_"+this.state.ValueTwoUnit
            }   
        axio.AddData(Config.url,dataObj)
        .then(response=>{
            console.log("output",response)
            this.setState({
                valueTwo:response.data.data.result
            })
            console.log(this.state)
          })
          .catch(error=>{
            console.log(error)
          })
    }
    
    operationWithValueTwo = eve  =>{     

        eve.preventDefault()   
        this.setState({
            valueTwo:eve.target.value
        })        
        let dataObj= {
            "value": eve.target.value,
            "operationType": this.state.ValueTwoUnit+"_TO_"+this.state.ValueOneUnit
            }   
        axio.AddData(Config.url,dataObj)
        .then(response=>{
           
            this.setState({
                valueOne:response.data.data.result
            })
            console.log(this.state)
          })
          .catch(error=>{
            console.log(error)
          })
    } 


   
    render()
    {
        return(
     
        <div id="containerForData">                        
            <div >
                <br/><lable id="text">FROM</lable><br/>
                <TextField className="TextField" type="number" variant="outlined" size="small" value={this.state.valueOne}  onChange={this.operationWithValueOne} /><br/>
                <Select id="Select" name="ValueOneUnit" label="ValueOneUnit" value={this.state.ValueOneUnit} onChange={this.onChangeHandler} >
                    {this.props.options.map( (units) => ( 
                        <option key={units.value} value={units.value} >{units.value}</option>
                    ))}
                </Select>
            </div>
            <div > 
            <br/><lable id="text">TO</lable><br/>
                <TextField className="TextField" type="number" variant="outlined" size="small" value={this.state.valueTwo}  onChange={this.operationWithValueTwo} /><br/>
                <Select id="Select" name="ValueTwoUnit" label="ValueTwoUnit" value={this.state.ValueTwoUnit} onChange={this.onChangeHandler} >
                    {this.props.options.map( (units) => ( 
                      
                        <option key={units.value} value={units.value} >{units.value}</option>
                    ))}
                </Select>
            </div>
        </div>
  

        )
    }
}
