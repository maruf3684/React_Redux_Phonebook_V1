import React from 'react';
import Navber from "./component/Navber";
import Tables from "./component/Tables";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import AddContract from "./component/AddContract";
import EditContract from "./component/EditContract";



const App = () => {
    return (
     <Router>
         <Navber/>
         <div className="container mt-5 mt-5">
         <Switch>
          <Route exact path="/" ><Tables/></Route>
          <Route exact path="/add" ><AddContract/></Route>
          <Route exact path="/edit/:id" ><EditContract/></Route>
         </Switch>
         </div>
     </Router>

    );
};

export default App;