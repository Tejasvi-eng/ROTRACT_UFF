import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import Landing from "./pages/Landing";
import About from "./pages/About";
import Events from "./pages/Events";
import Donate from "./pages/Donate";
import Contact from "./pages/Contact";
import JoinUs from "./pages/JoinUs";
import Parakram from "./pages/Parakram";
import WelcomePopup from "./pages/WelcomePopup";

function App() {
  return (
    <BrowserRouter>
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
    </BrowserRouter>
  );
}

export default App;