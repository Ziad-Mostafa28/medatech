import './App.css';
import { Route, Routes } from "react-router-dom";
import Home from './pages/Home/Home';
import Header from './components/Layout/Header/Header'
import Footer from './components/Layout/Footer/Footer';

const App = () => {
  
  // fetch('http://localhost:3005/data')
  // .then((response) => response.json())
  // .then((json) => console.log(json));

  return (
    <>
    <Header />
      <Routes >
        <Route 
        path='/'
        element = {
          <Home />
        }/>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
