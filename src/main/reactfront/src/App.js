import './App.css';
import { useNavigate } from "react-router-dom";
import ReportWebVital from "./reportWebVitals";
import Body from './components/body';
import Footer from './components/footer';
import Header from './components/header';
import SignUp from './pages/signup';
import Login from './pages/login';
import Home from './pages/home';
import About from './pages/about';
import DataTest from './pages/dataTest'
import { BrowserRouter, Routes, Route } from 'react-router-dom';



function App() {
  return (
    
    <BrowserRouter>
      <div className="App">
        <Routes> 
          <Route exact path="/" element={<Home />} />
          <Route path="/datatest/" element={<DataTest />}/>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/about" element={<About />}/>
        </Routes>
      </div>
    </BrowserRouter>
    
  );
}

export default App;
