
import './App.css';
import Home from './component/Home';
import Navbar from './component/Navbar';
import {Switch,Route} from "react-router-dom"
import Products from './component/Products';
import Product from './component/Product';
import Dropdown from './component/Dropdown';


function App() {
  return (<> <Navbar></Navbar>
  <Switch>
    <Route exact path="/" component={Home}/>
    <Route exact path="/products" component={Products}/>
    <Route exact path="/products/:id" component={Product}/>

  </Switch>
    {/* <Home></Home> */}
  </>

  )

}

export default App;
