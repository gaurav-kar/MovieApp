import React, { useState, useCallback } from "react";
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";

import Movies from "./allMovies/pages/Movies";
import SingleMovie from "./singleMovie/pages/SingleMovie";
import SingleMovieGrid from "./singleMovie/pages/SingleMovieGrid";
import Favourites from "./favouriteMovies/pages/favourites";
import Login from "./Auth/pages/Login";
import Register from "./Auth/pages/Register";
import { AuthContext } from "./context/auth-context";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token, setToken] = useState(null);

  const login = useCallback(() => setIsLoggedIn(true), []);
  const logout = useCallback(() => setIsLoggedIn(false), []);
  const setUserToken = useCallback((token) => setToken(token), []);

  return (
    <AuthContext.Provider
      value={{ isLoggedIn: isLoggedIn, userToken: token, login: login, logout: logout, setUserToken: setUserToken }}
    >
      <Router>
        <Switch>
          <Route path='/' exact>
            <Movies />
          </Route>
          <Route path='/movieTrendInfo' exact>
            <SingleMovie />
          </Route>
          <Route path='/movieGridInfo' exact>
            <SingleMovieGrid />
          </Route>
          <Route path='/user/favourites' exact>
            <Favourites />
          </Route>
          <Route path='/login' exact>
            <Login />
          </Route>
          <Route path='/signup' exact>
            <Register />
          </Route>

          <Redirect to='/' />
        </Switch>
      </Router>
    </AuthContext.Provider>
  );
};

export default App;
