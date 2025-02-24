
import Body from "./sections/Body";
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
    </div>
  );
}

export default App;
