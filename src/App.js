import logo from './logo.svg';
import './App.css';
import ClassComp from './components/ClassComp';
import FunctionComp from './components/FunctionComp';
import ClassCompt from './PropsComponent/ClassCompt';
import FunctionCompt from './PropsComponent/FunctionCompt';
import React, { useState } from 'react'
import EventComp from './EventComponents/EventComp';
import Users from './ListingComponents/Users';
import ConditionComp from './ConditionComponents/ConditionComp';
import FragmentComp from './FragmentComponents/FragmentComp';
import CreateUser from './FormComponent/CreateUser';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link, Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import ApiCompt from './APIComponents/ApiCompt';
function App() {

  const [name, setName] = useState("ravi ranaa")
  return (
    <div className="App">
      <h1>Home Page</h1>
      {/* <ClassComp></ClassComp> */}
      {/* <FunctionComp></FunctionComp> */}
      {/* <ClassCompt name={name}></ClassCompt> */}
      {/* <button onClick={()=>(setName("ravi rana rajput"))}>Update Props</button> */}


      {/* <button onClick={()=>(setName("ravi rana rajput"))}>Update Props</button>
      <FunctionCompt name={name}></FunctionCompt> */}
      {/* <EventComp></EventComp> */}

      {/* <CreateUser></CreateUser>
<Users></Users>
<ConditionComp></ConditionComp>
<FragmentComp></FragmentComp> */}
      <Router>

        <Navbar bg="dark" data-bs-theme="dark">
          <Container>
            <Navbar.Brand >Navbar</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link > <Link to="/createuser">CreateUser</Link></Nav.Link>
              <Nav.Link >  <Link to="/fragmentcomp">FragmentComp</Link></Nav.Link>
              <Nav.Link > <Link to="/users">Users</Link></Nav.Link>
              <Nav.Link > <Link to="/apicompt">APIComp</Link></Nav.Link>
            </Nav>
          </Container>
        </Navbar>

        <Switch>
          <Route path="/createuser">
            <CreateUser />
          </Route>
          <Route path="/fragmentcomp">
            <FragmentComp />
          </Route>
          <Route path="/users">
            <Users />
          </Route>

          <Route path="/apicompt">
            <ApiCompt />
          </Route>

        </Switch>




      </Router>

    </div>
  );
}

export default App;
