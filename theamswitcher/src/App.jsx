import React, { useEffect } from "react";
import { useState } from "react";
import "./App.css";
import { TheameProvider } from "./contexts/theam";
import Card from "./components/Card";
import ThemeBtn from "./components/ThemeBtn";

function App() {

  const [theamMode , setTheamMode] = useState("light");

  const DarkTheame = () => {
    setTheamMode("dark")
    
  }
  const LightTheame = () => {
    setTheamMode("light")
  }

  useEffect(() => {
    document.querySelector('html').classList.remove("light", "dark");
    document.querySelector('html').classList.add(theamMode);
  }, [theamMode]);

  return (
    
    <TheameProvider value = {{theamMode , DarkTheame , LightTheame }}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4"></div>
            <ThemeBtn/>
          <div className="w-full max-w-sm mx-auto"></div>
          <Card />
        </div>
      </div>
      </TheameProvider>
    
  );
}

export default App;
