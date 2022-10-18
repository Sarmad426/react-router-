import "./styles/appstyle.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/home";
import About from "./Components/About";
import Error from "./Components/Error";
import Navbar from "./Components/navbar";
import Products from "./Components/products";
import SingleProduct from "./Components/singleProduct";
import Login from "./Components/login";
import { Dashboard } from "./Components/dashboard";
import { ProtectedRoute } from "./Components/protectedRoute";
function App() {
  const [user, setUser] = React.useState(null);
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="products" element={<Products />}></Route>
        <Route path="products/:productId" element={<SingleProduct />} />
        <Route path="/login" element={<Login setUser={setUser}></Login>} />

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute user={user}>
              <Dashboard user={user}></Dashboard>
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
