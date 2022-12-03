
import Login from "./Pages/Login";
import Home from "./Pages/Home";


import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


function App() {
  return (
   <Router>
    <Routes>
      <Route path="/Home" element={<Home />} /> 
      <Route path="/" element={<Login />} /> 
      
      
      
    </Routes>
   </Router>
  );
}

export default App;
