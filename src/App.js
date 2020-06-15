import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';   
import UpperBar from "./components/upperBar"
import Header from "./components/heder"
import History from "./components/historys"

function App() {
  return (
   
     <div>
  <Router>
  
     
     <Route  path="/historys" component={History} />
     </Router>
    </div>
  );
}

export default App;
