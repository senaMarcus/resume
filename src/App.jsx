import Intro from "./components/Intro";
import About from "./components/About";
import ProductList from "./components/ProductList";
import Contact from "./components/Contact";
import  Toggle  from "./components/Toggle";
import { ThemeContext } from './context'

import ReactWhatsapp from "react-whatsapp";
import FloatingWhatsApp from "react-floating-whatsapp";
import { useContext } from "react";

function App() {
  
  const theme = useContext(ThemeContext)
  const darkMode = theme.state.darkMode;
  
  return (
    <div style={{backgroundColor:darkMode ? "#222" : "white", color: darkMode && "white"}}>
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
