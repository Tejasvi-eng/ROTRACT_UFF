import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Landing from "./pages/Landing";
import About from "./pages/About";
import Events from "./pages/Events";
import Donate from "./pages/Donate";
import Contact from "./pages/Contact";
import JoinUs from "./pages/JoinUs";
import Parakram from "./pages/Parakram";
import WelcomePopup from "./pages/WelcomePopup";

function AppContent() {
  const location = useLocation();

  const hideFooterRoutes = ["/parakram"];
  const shouldHideFooter = hideFooterRoutes.includes(location.pathname);

  return (
    <>
      <Navbar />
      <WelcomePopup />

      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<About />} />
        <Route path="/events" element={<Events />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/join-us" element={<JoinUs />} />
        <Route path="/parakram" element={<Parakram />} />
      </Routes>

      {!shouldHideFooter && <Footer />}
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;