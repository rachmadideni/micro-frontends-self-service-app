import { createHistory, LocationProvider } from "@reach/router";
import React, { StrictMode } from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import ReduxToastr from "react-redux-toastr";

import {
  AppNextGen,
  RouteProvider,
  ToolsRoutes,
  UtilsRoutes,
} from '../src-ts'

import App from "./App";
import store from "./store";

import "./styles/main.vendor.scss";

const history = createHistory(window);

export default function Root() {
  return (
    <>

      <BrowserRouter>
        <RouteProvider
          toolsRoutes={[...ToolsRoutes]}
          utilsRoutes={[...UtilsRoutes]}
        >
          <StrictMode>
            <AppNextGen />
          </StrictMode>
        </RouteProvider>
      </BrowserRouter>

      <LocationProvider history={history}>
        <Provider store={store}>
          <App />
          <ReduxToastr
            timeOut={3000}
            newestOnTop={false}
            preventDuplicates
            position="top-right"
            getState={(state) => state.toastr}
            transitionIn="fadeIn"
            transitionOut="fadeOut"
            progressBar
            closeOnToastrClick
          />
        </Provider>
      </LocationProvider>
    </>
  );
}
