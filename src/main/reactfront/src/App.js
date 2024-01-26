import './App.css';
import { useNavigate } from "react-router-dom";
import ReportWebVital from "./reportWebVitals";
import Home from './pages/home';
import Footer from './components/footer';
import Header from './components/header';
import SignUp from './pages/signup';
import Login from './pages/login';
import Router from "./router";



function App() {
  return (
    

    <div className='App'>
      <Header />
      <Home />
      <Footer /> 
  
    </div>
  );
}

export default App;
