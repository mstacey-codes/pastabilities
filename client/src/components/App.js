import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { hot } from "react-hot-loader/root";
<<<<<<< HEAD

=======
import UserProfile from "./UserProfile";
import AuthenticatedRoute from "./authentication/AuthenticatedRoute"
>>>>>>> f65e40bcdd032b9b40046f1a61540fc33833e0ac
import getCurrentUser from "../services/getCurrentUser";
import "../assets/scss/main.scss";

import HomePage from "./HomePage";
import CategoriesList from "./CategoriesList";
import CategoryShow from "./CategoryShow";
import RegistrationForm from "./registration/RegistrationForm";
import SignInForm from "./authentication/SignInForm";
import TopBar from "./layout/TopBar";
<<<<<<< HEAD

const App = (props) => {
  const [currentUser, setCurrentUser] = useState(undefined);
=======
import PastaShow from "./PastaShow";

const App = (props) => {
  const [currentUser, setCurrentUser] = useState(undefined);

>>>>>>> f65e40bcdd032b9b40046f1a61540fc33833e0ac
  const fetchCurrentUser = async () => {
    try {
      const user = await getCurrentUser();
      setCurrentUser(user);
    } catch (err) {
      setCurrentUser(null);
    }
  };

  useEffect(() => {
    fetchCurrentUser();
  }, []);

  return (
    <Router>
      <TopBar user={currentUser} />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/categories" component={CategoriesList} />
        <Route exact path="/categories/:id" component={CategoryShow} />
<<<<<<< HEAD
        <Route exact path="/users/new" component={RegistrationForm} />
        <Route exact path="/user-sessions/new" component={SignInForm} />
=======

        <Route exact path="/users/new" component={RegistrationForm} />
        <Route exact path="/user-sessions/new" component={SignInForm} />
        <AuthenticatedRoute exact path="/profile" component={UserProfile} user={currentUser} />
        
        <Route exact path='/pastas/:id' component={PastaShow} />
>>>>>>> f65e40bcdd032b9b40046f1a61540fc33833e0ac
      </Switch>
    </Router>
  );
};

export default hot(App);
