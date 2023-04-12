import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import Home from "./Components/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
