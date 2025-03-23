import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ReactGuide from "./pages/ReactGuide";
import ReactNativeGuide from "./pages/ReactNativeGuide";
import VueGuide from "./pages/VueGuide";
import ComandsGuide from "./pages/ComandsGuide";
import ComandsGit from "./pages/ComandsGit";
import About from "./pages/About";

// Detecta se está rodando no GitHub Pages
const isGitHubPages = import.meta.env.MODE === "production";

function App() {
  return (
    <Router basename={isGitHubPages ? "/meuprimeiroprojetoreactvite" : "/"}>
      <Navbar />
      <Routes>
        <Route path="/" element={<ReactGuide />} />
        <Route path="/reactnativeguide" element={<ReactNativeGuide />} />
        <Route path="/vueguide" element={<VueGuide />} />
        <Route path="/comandsguide" element={<ComandsGuide />} />
        <Route path="/comandsgit" element={<ComandsGit />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;