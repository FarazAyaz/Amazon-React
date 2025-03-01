
import Body from "./sections/Body";
import Footer from "./sections/footer";
import Hero from "./sections/Hero";
import Navbar from "./sections/Navbar";

function App() {
  return (
    <div>
      <Navbar/>
      <div className="max-w-[1440px] mx-auto">
      <Hero/>
      <Body/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
