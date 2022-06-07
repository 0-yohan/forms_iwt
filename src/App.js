import React from "react";
import Header from "./Header";
import "./App.css";
import Template from "./components/Template";
import Mainbody from "./components/Mainbody2";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Formheader from "./components/Formheader"
import Centeredtabs from "./components/Tabs";
import Question_form from "./components/Question_form";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>

          <Route path="/form/:id" >
              <Formheader />
              <Centeredtabs/>
              <Question_form/>
          </Route>

          <Route exact path="/" >
              <Header />
              <Template />
              <Mainbody />
          </Route>

        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
