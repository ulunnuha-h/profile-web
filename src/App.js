import React from "react";
import Nav from "./Components/Nav";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Project from "./Components/Projects";
import Contact from "./Components/Contact";

function App() {
    return (
        <main className="bg-slate-900">
            <Nav/>
            <div className="container mx-auto">
                <Hero/> 
                {/* <About/>
                <Project/>
                <Contact/> */}
            </div>
            <footer className="text-center text-gray-200 border-t-2 p-3 border-gray-600">
                Made with ☕ by Hanif Ulunnuha Hidayat
            </footer>
        </main>
    );
}

export default App;
