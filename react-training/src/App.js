import React, { useState, useEffect } from "react";
import LandingPage from "./views/LandingPage";
import injectContext from "./store/appContext";

const App = () => {
  return <LandingPage />;
};
export default injectContext(App);
