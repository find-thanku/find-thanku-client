import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import GlobalStyle from "../src/component/common/global-style/index";
import Layout from "../src/component/common/layout";
import MainPage from "../src/view/main/index";
import Notice from "../src/view/notice/index";
import LostBoard from "../src/view/lost-board/index";
import FoundBoard from "../src/view/found-board/index";
import Login from "../src/view/login/index";

const App: React.FC = () => (
  <>
    <GlobalStyle />
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route path="/" exact component={MainPage} />
          <Route path="/notice" exact component={Notice} />
          <Route path="/lost-board" exact component={LostBoard} />
          <Route path="/found-board" exact component={FoundBoard} />
          <Route path="/login" exact component={Login} />
          <Redirect from="*" to="/" />
        </Switch>
      </Layout>
    </BrowserRouter>
  </>
);

export default App;
