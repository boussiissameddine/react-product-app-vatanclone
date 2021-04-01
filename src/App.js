import './App.css';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './Pages/pages';
import About from './Pages/aboutTest';
import DataProvider from './context/context';
import Details from './context/details/details';
import FeaturedProducts from './components/products/featuredProducts/featuredProducts';

function App() {
  return (
    <DataProvider>
    <Router>
    <Navbar />
    <Switch>
      <Route path="/" exact component={Home}>
        <FeaturedProducts number={7}/>
        <FeaturedProducts number={10}/>
      </Route>
      <Route path="/about" component={About}/>
      <Route path="/:id" component={Details}/>
    </Switch>
    </Router>
    </DataProvider>
  );
}

export default App;
