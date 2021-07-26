
import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./style.css";
import Home from "./components/pages/Home";


export default function App() {
  return (
    <div>
      <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
      
          </Switch>

      </BrowserRouter>
    </div>
  );
}