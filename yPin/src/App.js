import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './App.css';

// Import the components I've made
import Footer  from './components/Footer';
import Home from './pages/Home';
import About from './pages/Policy';
import AboutT from './pages/TermsAndConditions';
import Contact from './pages/Contact'
import backgroundPic from './assets/images/city.png'


import 'bootstrap/dist/css/bootstrap.css';

const styles = {
  paperContainer: {
    background: `url(${backgroundPic})`,
    backgroundSize: 'cover', 
    height: "100vh"
  }
};

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      title: 'Martin Kuchar',
      headerLinks: [
        {title: 'Home', path: '/'},
        {title: 'Policy', path: '/policy'},
        {title: 'Policy', path: '/termsandcontitions'},
        {title: 'Contact', path: '/contact'}
      ],
      home: {
        title: 'yPin',
        subTitle: 'Art of code',
        text: 'App'
      }, 
      policy: {
        title: 'Policy',
      },
      tAndC: {
        title: 'Terms & Conditions',
      },
      contact: {
        title: 'Contact Us'
      }
    }
  }

  render() {
    return (
      <Router>
          <Container className="p-0" fluid={true} style={styles.paperContainer} >
            <Navbar className="border-bottom" bg="transparent" expand="lg" >
              <Navbar.Brand style={{ color: 'white' }} >yPin</Navbar.Brand>

              <Navbar.Toggle className="border-0" arja-aria-controls="navbar-toggle"/>
              <Navbar.Collapse id="navbar-toggle">
                <Nav className="ml-auto" > 
                  <Link style={{ color: 'white' }} className="nav-link" to="/">Home</Link>
                  <Link style={{ color: 'white' }} className="nav-link" to="/policy">Policy</Link>
                  <Link style={{ color: 'white' }} className="nav-link" to="/termsandconditions">Terms & Conditions</Link>
                  <Link style={{ color: 'white' }} className="nav-link" to="/contact">Contact</Link>
                </Nav>
              </Navbar.Collapse>
            </Navbar>

            <Route path="/" exact render={() => <Home title={this.state.home.title} /> } />
          
            <Route path="/policy" render={() => <About title={this.state.policy.title} /> } />

            <Route path="/termsandconditions" exact render={() => <AboutT title={this.state.tAndC.title} /> } />

            <Route path="/contact" render={() => <Contact title={this.state.contact.title} /> } />

            <Footer />

          </Container>
      </Router>
    );
  }
}

export default App;
