import React from "react";
import Nav from "./Components/Nav";
import Hero from "./Components/Hero";
import About from "./Components/About";

function App() {
    return (
        <main className="bg-slate-900">
            <Nav/>
            <div className="container mx-auto">
                <Hero/> 
                <About/>
            </div>
        </main>
    );
}

export default App;
