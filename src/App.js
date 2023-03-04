import HeroSection from "./components/HeroSection";
import NavBar from "./components/NavBar";
import Work from "./components/Work";
import Skill from "./components/Skill";
import Contact from "./components/Contact";
import Cursor from "./components/Cursor";

function App() {
  return (
    <div className="App">
      <HeroSection/>
      <NavBar/>
      <Skill/>
      <Work/>
      <Contact/>
      <Cursor/>
    </div>
  );
}

export default App;
