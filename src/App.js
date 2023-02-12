import React from "react";
import Nav from "./Components/Nav";
import Hero from "./Components/Hero";

function App() {
    return (
        <main className="bg-slate-900">
            <Nav/>
            <div className="container mx-auto">
                <Hero/> 
            </div>
        </main>
    );
}

export default App;
