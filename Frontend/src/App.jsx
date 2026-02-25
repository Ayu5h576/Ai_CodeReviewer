import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CodeReviewer from "./pages/CodeReviewer";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/review" element={<CodeReviewer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
