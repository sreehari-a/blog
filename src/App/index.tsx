/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";

import HomePage from "../HomePage/Loadable";

// import GlobalStyle from '../../global-styles';
import styles from "./styles";
import stylize from "../utils/stylize";
import MaintenancePage from "../MaintenancePage/Loadable";
import AppHeader from "../components/AppHeader";

type Props = {
  classes: any;
};

export function App(props: Props) {
  return (
    <div className={props.classes.appRoot}>
      <AppHeader />
      <div className={props.classes.app}>
        <BrowserRouter>
          <Switch>
            <Route path="/blog" component={HomePage} />
            <Route path="/" component={MaintenancePage} />
          </Switch>
        </BrowserRouter>
        {/* <GlobalStyle /> */}
      </div>
    </div>
  );
}
export default stylize(App, styles);
