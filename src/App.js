import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddProducts from "./components/AddProducts/AddProducts";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Navigation from "./components/Navigation/Navigation";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Container } from "@material-ui/core";
import { createContext } from "react";
import { useState } from "react";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Checkout from "./components/Checkout/Checkout";

export const UserContext = createContext();

function App(props) {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <Router>
      <div>
        <Navbar className="container mt-3">
            <Container>
              <Navbar.Brand className="font-weight-bold" href="#home">Fresh Valley</Navbar.Brand>
            </Container>
            <Nav className="me-auto">
                <Link className="nav-link" to="/">Home</Link>
                <Link className="nav-link" to="/orders">Orders</Link>
                <Link className="nav-link" to="/addProducts">Admin</Link>
                <Link className="nav-link" to="/deals">Deals</Link>
                <button style={{backgroundColor: '#74bc5c', width: '25%'}} className="btn text-white" type="submit"><Link to="/login">Login</Link></button>
            </Nav>
          </Navbar>
          <br />

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
        <Switch>
          <Route path="/about">
            <Navigation />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/addProducts">
            <AddProducts/>
          </Route>
          <Route path="/checkout">
            <Checkout/>
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        </UserContext.Provider>
      </div>
    </Router>
  );
}

export default App;
