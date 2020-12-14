import logo from './logo.svg';
import './App.css';

import Home from './components/Home';
import Navbar from './components/Navbar';
import News from './components/News';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Product from './components/Product';

import Admin from './components/Admin';

// router 
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import ProductDetails from './components/ProductDetails';
function App() {
  return (
    <div>

      {/*  */}
      <Router>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Navbar />
          <Switch>
            <Route path="/news">
              <News />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>

            <Route path="/products/:id" component={ ProductDetails } />
            
            <Route exact path="/product-details">
              <ProductDetails />
            </Route>
            <Route path="/products" exact component={ Product } />

            <Route path="/admin">
              <Admin />
            </Route>

            <Route path="/">
              <Home />
            </Route>
          </Switch>
          <Footer />

      </Router>
    </div>
  );
}

export default App;
