import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Header from "./components/Layout/Header/Header";
import Footer from "./components/Layout/Footer/Footer";
import About from "./pages/About/About";

const App = () => {
  // fetch('http://localhost:3005/data')
  // .then((response) => response.json())
  // .then((json) => console.log(json));

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />}/>
      </Routes>
      <Footer />
    </>
  );
};

export default App;
