import './App.css';
import { useNavigate } from "react-router-dom";
import ReportWebVital from "./reportWebVitals";
import Body from './components/body';
import Footer from './components/footer';
import Header from './components/header';
import SignUp from './pages/signup';
import Login from './pages/login';
import Home from './pages/home'
import { BrowserRouter, Routes, Route } from 'react-router-dom';



function App() {
  return (
    
    <BrowserRouter>
      <div className="App">
        <Routes> 
          <Route exact path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </div>
    </BrowserRouter>
    
  );
}

export default App;
