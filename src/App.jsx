import { Routes, Route } from "react-router-dom";
import NavigationMenu from "./components/NavigationMenu";
import Shop from "./Pages/Shop";
import Skills from "./Pages/Skills";
import Stories from "./Pages/Stories";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
         <Header />
         <NavigationMenu />

      <Routes>
        <Route path="/shop" element={<Shop />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/stories" element={<Stories />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </div>
  );
}
