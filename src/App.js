import logo from './logo.svg';
import './App.css';
import SimpleMap from "./Hi";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Index from "./pages/Index";
import Section from "./pages/Section";
import Place from "./pages/Place";
import Photos from "./pages/Photos";

function App() {
  return (
    <div className="App" style={{display:'flex',flexWrap:'wrap',width:'100%'}}>
        <Router>
            <Routes>
                <Route path='/' element={<Index/>} />
                <Route path='/section/:section' element={<Section/>} />
                <Route path='/place/:id' element={<Place/>} />
                <Route path='/place/photos/:id' element={<Photos/>} />
            </Routes>
        </Router>
    </div>
  );
}

export default App;
