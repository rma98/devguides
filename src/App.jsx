import { HashRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import ReactGuide from "./pages/ReactGuide";
import ReactNativeGuide from "./pages/ReactNativeGuide";
import NextjsGuide from "./pages/NextjsGuide";
import VueGuide from "./pages/VueGuide";
import ComandsGuide from "./pages/ComandsGuide";
import ComandsGit from "./pages/ComandsGit";
import ImportantInforPage from "./pages/ImportantInforPage";
import About from "./pages/About";
import CrossWordsPage from "./pages/CrossWordsPage";
import PortalRobson from "./pages/PortalRobson";

function Layout() {
  const location = useLocation(); // Obtém a URL atual
  const hiddenNavbarRoutes = ["/crossWords", "/portalRobson"];

  return (
    <>
      {!hiddenNavbarRoutes.includes(location.pathname) && <Navbar />}
      <Routes>
        <Route path="/" element={<ReactGuide />} />
        <Route path="/reactnativeguide" element={<ReactNativeGuide />} />
        <Route path="/nextjsguide" element={<NextjsGuide />} />
        <Route path="/vueguide" element={<VueGuide />} />
        <Route path="/comandsguide" element={<ComandsGuide />} />
        <Route path="/comandsgit" element={<ComandsGit />} />
        <Route path="/importantinfor" element={<ImportantInforPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/crossWords" element={<CrossWordsPage />} />
        <Route path="/portalRobson" element={<PortalRobson />} />
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
