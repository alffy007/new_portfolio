import React from "react";
import "./App.css";
import Contacts from "./components/Contacts/contacts";
import Projects from "./components/Projects/projects";
import About from "./components/About/about";
import Banner from "./components/Banner/banner";
import NavBar from "./components/NavBar/navbar";
function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <About />
      <Projects />
      <Contacts />
    </div>
  );
}

export default App;
