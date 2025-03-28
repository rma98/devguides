import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import ReactGuide from "./pages/ReactGuide";
import ReactNativeGuide from "./pages/ReactNativeGuide";
import VueGuide from "./pages/VueGuide";
import ComandsGuide from "./pages/ComandsGuide";
import ComandsGit from "./pages/ComandsGit";
import About from "./pages/About";
import CrossWordsPage from "./pages/CrossWordsPage";

const isGitHubPages = import.meta.env.MODE === "production";

function Layout() {
  const location = useLocation(); // Obtém a URL atual

  return (
    <>
      {/* Exibe a Navbar apenas se não estiver na página CrossWordsPage */}
      {location.pathname !== "/crossWords" && <Navbar />}
      <Routes>
        <Route path="/" element={<ReactGuide />} />
        <Route path="/reactnativeguide" element={<ReactNativeGuide />} />
        <Route path="/vueguide" element={<VueGuide />} />
        <Route path="/comandsguide" element={<ComandsGuide />} />
        <Route path="/comandsgit" element={<ComandsGit />} />
        <Route path="/about" element={<About />} />
        <Route path="/crossWords" element={<CrossWordsPage />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <Router basename={isGitHubPages ? "/meuprimeiroprojetoreactvite" : "/"}>
      <Layout />
    </Router>
  );
}

export default App;
