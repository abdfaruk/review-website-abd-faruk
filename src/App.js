import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer'
import { BrowserRouter, Switch, Route, } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import Services from './components/Services/Services';
import Teachers from './components/Teachers/Teachers';
import NotFound from './components/NotFound/NotFound';
import Contact from './components/Contact/Contact';
import Order from './components/Order/Order';
import AboutFixed from './components/AboutFixed/AboutFixed';
import ServicesFixed from './components/ServicesFixed/ServicesFixed';
import Messege from './components/Messege/Messege';

function App() {
  return (
    <div className="body">
      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
            <Services></Services>
            <Teachers></Teachers>
            <About></About>
            <Contact></Contact>
          </Route>
          <Route path='/home'>
              <Home></Home>
              <Services></Services>
              <Teachers></Teachers>
              <About></About>
              <Contact></Contact>
          </Route>
          <Route path='/about'>
            <AboutFixed></AboutFixed>
            <About></About>
          </Route>
          <Route path='/service'>
            <ServicesFixed></ServicesFixed>
            <Services></Services>
          </Route>
          <Route path='/contact'>
            <Contact></Contact>
          </Route>
          <Route path='/order'>
            <Order></Order>
            <Services></Services>
          </Route>
          <Route path='/messege'>
            <Messege></Messege>
          </Route>
          <Route path='*'>
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;