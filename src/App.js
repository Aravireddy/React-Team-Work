
import './App.css';
import "./Responsive.css";
import Navbar from './components/Navbar/Navbar';
import Offerhero from './components/Offerlables/Offerhero';
import Product1 from './components/Products/Product1';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Offerhero />
      <Product1 />
    </div>
  );
}

export default App;
