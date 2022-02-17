import Intro from "./components/Intro";
import About from "./components/About";
import ProductList from "./components/ProductList";
import Contact from "./components/Contact";
import { Toggle } from "./components/Toggle";

function App() {
  return (
    <div >
      <Toggle />      
      <Intro />   
      <About />
      <ProductList />
      <Contact />
    </div>
  );
}

export default App;
