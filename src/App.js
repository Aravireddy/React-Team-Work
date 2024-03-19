
import './App.css';
import CementPage from './Pages/CementPage';
import PvcPage from './Pages/PvcPage';
import "./Responsive.css";
import HeroSection from './components/Hero/HeroSection';
import Navbar from './components/Navbar/Navbar';



function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <div className='mbody'>
      <CementPage />
      <PvcPage />
      </div>
    </div>
  );
}

export default App;
