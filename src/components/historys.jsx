  
 import React, { Component } from 'react';
 import Table from '@material-ui/core/Table';
 import TableBody from '@material-ui/core/TableBody';
 import TableCell from '@material-ui/core/TableCell';
 import TableContainer from '@material-ui/core/TableContainer';
 import TableHead from '@material-ui/core/TableHead';
 import TableRow from '@material-ui/core/TableRow';
 import Paper from '@material-ui/core/Paper';
 import Button from '@material-ui/core/Button';
 import AxiosService from "../services/axio-services";
 import "../CSS/history.css";
const axio = new AxiosService();


 export class History extends Component {
  
   constructor(props){
     super(props);
     this.state={
       HistoryData:[]
     }
   }

   componentDidMount(){
     this.getAllData();
   }
   getAllData = () =>{
    axio.getAllData().then((json) =>{
      console.log("employee array",json);
       this.setState({HistoryData: json.data.data});
       console.log("employee array",this.state);
     }) .catch((err)=>{
      console.log(err)
    })
  }
    
  /*
delete = (ID) => {
    axio.delete(ID).then((json) => {
      if (json.data.status === true) {
          alert('Record deleted successfully!!');
        
      }
  })
}
 */
   render() {
     const{employeeData}=this.state    
     return (  
       <div className="table">
           
              
       <TableContainer  className="table" component={Paper} >    
       <Table id="tabledata" >
       <TableHead>
        <TableRow>
       
            
             <TableCell align="left">value</TableCell>
             <TableCell align="left">OperationUnit</TableCell>
            <TableCell align="left">Result</TableCell>
            <TableCell align="right">Delete</TableCell>
           </TableRow>
         </TableHead>
         <TableBody>
         {
           
            this.state.HistoryData.map((d, index) => {
              return <TableRow key={index}>
                 
                    
              
               <TableCell align="left">{d.value}</TableCell>
               <TableCell align="left">{d.operationType}</TableCell>
               <TableCell align="left">{d.result}</TableCell>
               <TableCell align="right"><Button  style={{colour:'red'}}variant="contained" onClick={() => this.delete(d.Id)}>Delete</Button></TableCell>
             </TableRow>
           })
          }
          
         </TableBody>
       </Table>
     </TableContainer>
    </div>
      
     );    

  }
 }

 export default History;