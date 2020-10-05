import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import axios from "axios";
import "./App.css";
import MyAlbums from "./MyAlbums.js";
import AlbumName from "./AlbumName.js";
import SinglePicture from "./SinglePicture.js";

function App() {
  return (
    <div className="App">
      <div className="Albums">
        <Router>
          <Switch>
            <Route exact path="/">
              <MyAlbums />
            </Route>
            <Route path="/albums/:id">
              <AlbumName />
            </Route>
            {/* <Route path="/singlepicture">
              <SinglePicture />
            </Route> */}
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
