import React from "react";
import "./styles/App.css";
import Destinations from "./Components/Destinations";
import ContactForm from "./Components/ContactForm";
import Agency from "./Components/Agency"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1> 🦁 Kenyan Safari Adventures 🐘</h1>
        <a>Discover the Wild Heart of Africa</a>
      </header>

      <main>
        <Destinations />
        <Agency/>
      </main>

      <footer>
        <ContactForm/>
      </footer>
    </div>
  );
}

export default App;
