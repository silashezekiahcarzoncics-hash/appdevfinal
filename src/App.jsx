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


