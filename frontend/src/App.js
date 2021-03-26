import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Results from "./pages/Results";
import ParametersForm from "./pages/ParametersForm";

const App = () => (
  <BrowserRouter>
    <div className="container">
      <Switch>
        <Route component={ParametersForm} path="/" exact={true} />
        <Route component={Results} path="/results/:seplength/:sepwidth/:petlength/:petwidth/:epoch/:learnin" />
      </Switch>
    </div>
  </BrowserRouter>
);

export default App;
