import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ReactGuide from "./pages/ReactGuide";
import VueGuide from "./pages/VueGuide";
import About from "./pages/About";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ReactGuide />} />
        <Route path="/vueguide" element={<VueGuide />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
