import './App.css';
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
          <Route path="/api/test" element={<DataTest />}/>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/about" element={<About />}/>
        </Routes>
      </div>
    </BrowserRouter>
    
  );
}

export default App;
