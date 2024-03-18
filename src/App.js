
import './App.css';
import "./Responsive.css";
import HeroSection from './components/Hero/HeroSection';
import Navbar from './components/Navbar/Navbar';
import Ultratech from './components/ProductDetail/UltratechCements/Ultratech';



function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <Ultratech />
    </div>
  );
}

export default App;
