import Navbar from "./components/Navbar";
import { Hero, About, Resume, Projects, Contact } from "./pages";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Resume />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
