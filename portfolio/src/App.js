import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './App.css';

// Import the components I've made
import Footer  from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact'
import backgroundPic from './assets/images/backgroundPic.png'


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
        {title: 'About', path: '/about'},
        {title: 'Contact', path: '/contact'}
      ],
      home: {
        title: 'Do More',
        subTitle: 'Art of code',
        text: 'Find my projects below'
      }, 
      about: {
        title: 'About me',
      },
      contact: {
        title: 'Contact me'
      }
    }
  }

  render() {
    return (
      <Router>
          <Container className="p-0" fluid={true} style={styles.paperContainer} >
            <Navbar className="border-bottom" bg="transparent" expand="lg" >
              <Navbar.Brand style={{ color: 'white' }} >Martin Kuchar</Navbar.Brand>

              <Navbar.Toggle className="border-0" arja-aria-controls="navbar-toggle"/>
              <Navbar.Collapse id="navbar-toggle">
                <Nav className="ml-auto" > 
                  <Link style={{ color: 'white' }} className="nav-link" to="/">Home</Link>
                  <Link style={{ color: 'white' }} className="nav-link" to="/about">About</Link>
                  <Link style={{ color: 'white' }} className="nav-link" to="/contact">Contact</Link>
                </Nav>
              </Navbar.Collapse>
            </Navbar>

            <Route path="/" exact render={() => <Home title={this.state.home.title}
            // Use exact because we want exact match and this is final destination, other ones are unique.
            // State is important, we use properties from the main page, so we don't need to have a pages to be class
            // components but functional components and just display data
              subTitle={this.state.home.subTitle} text={this.state.home.text} /> } />
            
            <Route path="/about" render={() => <About title={this.state.about.title} /> } />

            <Route path="/contact" render={() => <Contact title={this.state.contact.title} /> } />

            <Footer style={{ height: '100%', position: 'fixed', left: '0px', width: '100%', overflow: 'hidden'}}/>


          </Container>
      </Router>
    );
  }
}

export default App;
