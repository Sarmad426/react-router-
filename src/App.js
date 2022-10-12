import "./styles/appstyle.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/home";
import About from "./Components/About";
import Error from "./Components/Error";
import Navbar from "./Components/navbar";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
