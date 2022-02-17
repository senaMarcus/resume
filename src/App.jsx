import Intro from "./components/Intro";
import About from "./components/About";
import ProductList from "./components/ProductList";
import Contact from "./components/Contact";
import { Toggle } from "./components/Toggle";
import ReactWhatsapp from "react-whatsapp";

import FloatingWhatsApp from "react-floating-whatsapp";

function App() {
  return (
    <div >
      <Toggle />      
      <Intro />   
      <About />
      <ProductList />
      <Contact />
      <ReactWhatsapp number="+5531997037152" message="Olá!!! Como posso te ajudar?" />
      <FloatingWhatsApp phoneNumber="+5531997037152" />
    </div>
  );
}

export default App;
