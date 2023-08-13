import './App.css';
import { NavBar, Footer, Ad } from './components';

// Local Imports
import { IconPage } from "./pages/index"

function App() {
  return (
    <div className="App">
      {/* Navbar */}
      <NavBar />
      <Ad/>
      <IconPage />
      <Footer/>
    </div>
  );
}

export default App;
