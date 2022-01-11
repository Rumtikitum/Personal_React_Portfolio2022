import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { About } from './components/About/About';
import { Home } from './components/Home/Home';
import { SideNav } from './components/SidePanels/SidePanel';
import { Work } from './components/Work/Work';
import { Contact } from './components/Contact/Contact';


function App() {
  return (
    <Router>
      <div className="App">
        <SideNav></SideNav>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/work" element={<Work/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
