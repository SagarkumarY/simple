import "./App.css";
import Contact from "./Components/Contact";
import Header from "./Components/Header";
import { BrowserRouter,Route,Routes } from "react-router-dom";
function Navbar (){
  return (
     <>
     <h1>Hello I,m navbar</h1>
     </>
  )
}
function Anime (){
  return (
     <>
     <h1>Hello I,m navbar</h1>
     </>
  )
}
function Naruot (){
  return (
     <>
     <h1>Hello I,m navbar</h1>
     </>
  )
}
function Footer (){
  return (
     <>
     <h1>This  is Footer !</h1>
     </>
  )
}

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Anime/>
    <Naruot/>
    <Routes>
      <Route path="/" element={<Header />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
    <Footer/>
    </BrowserRouter>
  );
}

export default App;
