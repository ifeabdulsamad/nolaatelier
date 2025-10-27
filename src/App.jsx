import "./App.css";
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import Product from "./components/Product.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <>
      <div>
        <Home />
        <About />
        <Product />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
