import Navbar from "./Navbar";
import Products from "./Products";
import  {Services} from "./Services";
import './index.css';


function App(){
  return(
    <div className="App">
      <Navbar/>
      <Services/>
      <Products/>
      
    </div>
  )
}

export default App;