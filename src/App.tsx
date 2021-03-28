import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Layout from "../src/component/common/layout";
import MainPage from "../src/view/main/index";

const App: React.FC = () => (
  <div>
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route path="/" component={MainPage} />;
          <Redirect from="*" to="/" />
        </Switch>
      </Layout>
    </BrowserRouter>
  </div>
);

export default App;
