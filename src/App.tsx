import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import MainPage from "../src/view/main/index";

const App: React.FC = () => (
  <div>
    <Switch>
      <Route path="/" component={MainPage} />;
      <Redirect from="*" to="/" />
    </Switch>
  </div>
);

export default App;
