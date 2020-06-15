import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';   
import UpperBar from "./components/upperBar"
import Header from "./components/heder"
import History from "./components/historys"
import Home from "./components/home";
function App() {
  return (
   
     <div>
  <Router>
  
     
     <Home />
     </Router>
    </div>
  );
}

export default App;
