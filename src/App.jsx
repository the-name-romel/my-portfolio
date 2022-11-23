import Navbar from "./components/Navbar";
import { Hero, About, Resume, Projects } from "./pages";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Resume />
      <Projects />
    </div>
  );
}

export default App;
