
import {Link } from "react-router-dom";  
import "../CSS/topBar.css"
import React from 'react';

  
function UpperBar(Prop){
    return (
        <div className='container'>
            <Link to="/" > <div className='quanment'>Quanment</div></Link> 
            <Link to="/historys" ><div className="history">History</div></Link>
            
    </div>)
}
export default UpperBar;
