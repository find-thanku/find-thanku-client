import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Layout from "../src/component/common/layout";
import MainPage from "../src/view/main/index";
import LostBoard from "../src/view/lost-board/index";
import FoundBoard from "../src/view/found-board/index";

const App: React.FC = () => (
  <div>
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route path="/" exact component={MainPage} />
          <Route path="/lost-board" exact component={LostBoard} />
          <Route path="/found-board" exact component={FoundBoard} />
          <Redirect from="*" to="/" />
        </Switch>
      </Layout>
    </BrowserRouter>
  </div>
);

export default App;
