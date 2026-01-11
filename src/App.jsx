import Navbar from "./components/Layout/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import HowItWorks from "./components/HowItWorks";
import Scanner from "./components/Scanner";
import OtherTools from "./components/OtherTools";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div>
        <Navbar />
        
        <main id="home">
          <Hero />
        </main>
        
        <section id="how-it-works">
          <HowItWorks />
        </section>
        
        <section id="about">
          <About />
        </section>
        
        <section id="scanner">
          <Scanner />
        </section>
        
        <section id="othertools">
          <OtherTools />
        </section>
        
        <Footer />
      </div>
    </div>
  );
}

export default App;