import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CodeReviewer from "./pages/CodeReviewer";
import Signup from "./pages/SignUp";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/review" element={<CodeReviewer />} />
        <Route path="/Sign" element={<Signup></Signup>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
