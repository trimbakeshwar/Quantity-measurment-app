import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';   
import History from "./components/historys"
import Home from "./components/home";
function App() {
  return (
   
     <div>
  <Router>
  <Route exact path="/" component={Home}/>
 <Route exact path="/historys" component={History}/>
 
    
     </Router>
    </div>
  );
}

export default App;


