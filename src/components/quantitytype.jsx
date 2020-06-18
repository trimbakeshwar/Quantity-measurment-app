import React, { Component } from 'react';
import{TextField,MenuItem,Select }from '@material-ui/core';
import "../CSS/quantity.css"
export  default class QuantityType extends Component{
    constructor(props){
        super(props)
        this.state={

            ValueOne:"",
            ValueOneUnit :"",
            valueTwo:"",
            ValueTwoUnit:"",
        }

    }
    onChangeHandler = eve =>{
        eve.preventDefault()  
        this.setState({[eve.target.name]:eve.target.value})
    }    
    
   
    
    onChangeHandler = eve =>{
        eve.preventDefault()  
        this.setState({
            
            [eve.target.name]:eve.target.value})
    }    

   
    render()
    {
        return(
     
        <div id="containerForData">                        
            <div >
                <lable id="text">FROM</lable><br/><br/>
                <TextField className="TextField" type="number" variant="outlined" size="small" value={this.state.valueOne}  onChange={this.operationWithValueOne} /><br/>
                <Select id="Select" name="ValueOneUnit" label="ValueOneUnit" value={this.state.ValueOneUnit} onChange={this.onChangeHandler} >
                    {this.props.options.map( (units) => ( 
                        <MenuItem  key={units.value} value={units.value} >{units.value}</MenuItem>
                    ))}
                </Select>
            </div>
            <div > 
                <lable id="text">TO</lable><br/><br/>
                <TextField className="TextField" type="number" variant="outlined" size="small" value={this.state.valueTwo}  onChange={this.onValueTwoChange} /><br/>
                <Select id="Select" name="ValueTwoUnit" label="ValueTwoUnit" value={this.state.ValueTwoUnit} onChange={this.onChangeHandler} >
                    {this.props.options.map( (units) => ( 
                        <MenuItem  key={units.value} value={units.value} >{units.value}</MenuItem>
                    ))}
                </Select>
            </div>
        </div>
  

        )
    }
}