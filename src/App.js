import Navbar from "./Navbar";
import Products from "./Products";
import  {Services} from "./Services";
import { Listings } from "./ProductLisiting";
import { Footer } from "./Footer";
import './index.css';


function App(){
  return(
    <div className="App">
      <Navbar/>
      <Services/>
      <Products/>
      <Listings/>
      <Footer/>
      
    </div>
  )
}

export default App;