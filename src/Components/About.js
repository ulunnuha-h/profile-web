import React from "react";
import me from "../Assets/me.jpg"

const About = () => {
    return(
        <div className="h-screen flex items-center" id="about">
            <div className="bg-gray-200 flex lg:w-3/4 2xl:w-3/5 lg:mx-auto mx-2 rounded-lg text-slate-800 overflow-hidden lg:flex-row flex-col">
                <div className="lg:basis-3/5 lg:p-12 p-7">
                    <h2>About me</h2>
                    <p className="text-justify">I love graphic design and programming. When I was accepted as an Informatic Engineering Student, I wanted to combine my design skill with programming and that's where I found Front-end Development. It feels like combining what you want and what you have. There's always a relieved and satisfied feeling when I saw a nice-looking design from something I made, that's why I will always do my best.</p>
                    <hr className="border-slate-500 my-5"></hr>
                    <p className="mb-3">Tech that i use in front-end development recently :</p>
                    <div className="flex">
                        <ul className="list-disc list-inside font-baskerville basis-1/2">
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>Javascript</li>
                        </ul>
                        <ul className="list-disc list-inside font-baskerville basis-1/2">
                            <li>React JS</li>
                            <li>Node JS</li>
                            <li>Tailwind</li>
                        </ul>
                    </div>
                </div>
                <div className="lg:basis-2/5 bg-cover bg-center" style={{backgroundImage:`url(${me})`}}></div>
            </div>
        </div>
    )
}

export default About;