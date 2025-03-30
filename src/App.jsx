import { HashRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import ReactGuide from "./pages/ReactGuide";
import ReactNativeGuide from "./pages/ReactNativeGuide";
import VueGuide from "./pages/VueGuide";
import ComandsGuide from "./pages/ComandsGuide";
import ComandsGit from "./pages/ComandsGit";
import ImportantInforPage from "./pages/ImportantInforPage";
import About from "./pages/About";
import CrossWordsPage from "./pages/CrossWordsPage";

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
        <Route path="/importantinfor" element={<ImportantInforPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/crossWords" element={<CrossWordsPage />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}

export default App;
