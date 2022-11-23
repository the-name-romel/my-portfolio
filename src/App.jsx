import Navbar from "./components/Navbar";
import { Hero, About, Resume } from "./pages";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Resume />
    </div>
  );
}

export default App;
