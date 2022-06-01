
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Product from './components/Product';
import About from './components/About';
import {Routes,Route}  from "react-router-dom"
import Products from './components/Products';
function App() {
  return (
    <div className="App">
   <Navbar/>
   <Routes>
   <Route path="" element={ <Home/>}> </Route>
   
   <Route path="About" element={  <About/>}> </Route>
   <Route path="Product/*" element={ <Products/>}> 
   <Route path="id" element={ <Product/>}/>
   </Route>
   </Routes>
  
   
  
    </div>
  );
}

export default App;
