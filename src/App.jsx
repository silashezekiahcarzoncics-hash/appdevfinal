<<<<<<< HEAD
      //\src\App.jsx
      import { BrowserRouter, Routes, Route } from "react-router-dom";
      import Home from "./pages/Home";
      import Login from "./pages/Login";
      import AboutUs from "./pages/AboutUs";
      import Contact from "./pages/Contact";
      import Register from "./pages/Register";
      import Reset from "./pages/Reset";
      import CustomerInfoForm from "./pages/CustomerInfoForm";

      function App() {
        return (
          <Routes>
            <Route path="/" element={<Home />} />

            {/* AUTH PAGES */}
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/reset" element={<Reset />} />
            <Route path="/order" element={<CustomerInfoForm />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/customerinfo" element={<CustomerInfoForm />} />
          </Routes>
        );
      }

      export default App;
=======
//C:\Users\Silas Carzon\saiphercg2.0\src\App.jsx
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CustomerInfoForm from "./pages/CustomerInfoForm";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/order" element={<CustomerInfoForm />} /> 
    </Routes>
  );
}

export default App;


>>>>>>> f337583942063416bf7b0a096a2860fbeadb3e35
