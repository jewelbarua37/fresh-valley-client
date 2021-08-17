import React, {useState} from "react";
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
import { Nav, Navbar} from "react-bootstrap";
import { Container } from "@material-ui/core";
import { createContext } from "react";
import Checkout from "./components/Checkout/Checkout";

export const UserContext = createContext();

function App(props) {
  const [loggedInUser, setLoggedInUser] = useState({})
  return (
    <UserContext.Provider value = {[loggedInUser, setLoggedInUser]}>
      
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
               <img style={{width: '50px'}} src={loggedInUser.photo}></img>
            </Nav>
          </Navbar>
          <h3 className="text-center"> Welcome {loggedInUser.name} to Fresh Valley</h3>
          <br />
         

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
       
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
      </div>
    </Router>
    </UserContext.Provider> 
  );
}

export default App;
