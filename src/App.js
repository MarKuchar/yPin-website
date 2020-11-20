import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './App.css';

// Import the components I've made
import Footer  from './components/Footer';

import 'bootstrap/dist/css/bootstrap.css';

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      tittle: 'Martin Kuchar',
      headerLinks: [
        {tittle: 'Home', path: '/'},
        {tittle: 'About', path: '/about'},
        {tittle: 'Contact', path: '/contact'}
      ],
      home: {
        tittle: 'Do More',
        subTittle: '',
        text: ''
      }, 
      about: {
        tittle: 'About me',
      },
      contact: {
        tittle: 'Contact me'
      }
    }
  }

  render() {
    return (
      <Router>
          <Container className="p-0" fluid={true}>
            <Navbar className="border-bottom" bg="transparent" expand="lg">
              <Navbar.Brand>Martin Kuchar</Navbar.Brand>

              <Navbar.Toggle className="border-0" arja-aria-controls="navbar-toggle"/>
              <Navbar.Collapse id="navbar-toggle">
                <Nav className="ml-auto"> 
                  <Link className="nav-link" to="/">Home</Link>
                  <Link className="nav-link" to="/about">About</Link>
                  <Link className="nav-link" to="/contact">Contact</Link>
                </Nav>
              </Navbar.Collapse>
            </Navbar>

            <Footer/>


          </Container>
      </Router>
    );
  }
}

export default App;
