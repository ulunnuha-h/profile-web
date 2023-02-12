import React from "react";

const Hero = () => {
    return(
        <div style={{height:'calc(100vh - 64px)'}} className="text-gray-100 flex justify-center items-center flex-col text-center">
            <span className="font-baskerville mb-5 text-gray-200 text-lg">Hello, my name is</span>
            <h1>Hanif Ulunnuha Hidayat</h1>
            <h1>A <span className="text-orange-400">front-end developer</span></h1>
            <span className="font-baskerville text-gray-300">I ensure visitors comfortable when interact with the web page.</span>
            <a href="#" className="btn-primary py-3 px-6 mt-16">See my projects</a>
        </div>
    )
}

export default Hero