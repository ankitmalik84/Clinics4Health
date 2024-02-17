import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Legal from "./Pages/Legal";
import NotFound from "./Pages/NotFound";
import Contact from "./Pages/Contact";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Testimonial from "./Pages/Testimonial";
import AOS from "aos";
import "aos/dist/aos.css";
import AboutUs from "./Pages/AboutUs";
import MouseParticles from "react-mouse-particles";
import Solutions from "./Pages/Solutions";
import Privacy from "./Pages/Privacy";
import Articles from "./Pages/Articles";
import Article1 from "./Pages/Article1";
import Article2 from "./Pages/Article2";
import MedicalTranscription from "./Pages/MedicalTranscription";
import MedicalBilling from "./Pages/MedicalBilling";
import FAQs from "./Pages/Faq";
function App() {
  AOS.init();
  return (
    <div className="App">
      <Router basename="/">
        <Navbar />
        <MouseParticles
          g={1}
          radius={10}
          color={["#1A8EFD", "#ccdfs2"]}
          cull="img,image-wrapper"
          level={1}
        />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/legal" element={<Legal />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/testimonials" element={<Testimonial />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/article" element={<Articles />} />
          <Route path="/article1" element={<Article1 />} />
          <Route path="/article2" element={<Article2 />} />
          <Route path="/faqs" element={<FAQs />} />
          <Route
            path="/medicaltranscription"
            element={<MedicalTranscription />}
          />
          <Route path="/medicalbilling" element={<MedicalBilling />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
