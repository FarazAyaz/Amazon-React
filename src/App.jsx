
import Body from "./sections/Body";
import Hero from "./sections/Hero";
import Navbar from "./sections/Navbar";
import footer from "./sections/footer";
function App() {
  return (
    <div>
      <Navbar/>
      <div className="max-w-[1440px] mx-auto">
      <Hero/>
      <Body/>
      <footer/>
      </div>
    </div>
  );
}

export default App;
