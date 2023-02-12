import React from "react";

const Contact = () => {
    return(
        <div className="h-screen text-gray-200 flex justify-center mx-auto flex-col w-1/2 text-center">
            <h1>Get In Touch</h1>
            <p>I am currently looking for new opportunities. If you have a question or just want to get to know me, i'll be reply you as fast as possible.</p>
            <section className="mt-5">
                <a href="https://www.linkedin.com/in/hanif-ulunnuha-hidayat-57b922222/" target="blank" className="btn-social">
                    <i className="fa-brands fa-linkedin"/>
                </a>
                <a href="https://github.com/ulunnuha-h" target="blank" className="btn-social">
                    <i className="fa-brands fa-github"/>
                </a>
                <a href="https://www.instagram.com/hanifulunnuha.s16/" target="blank" className="btn-social">
                    <i className="fa-brands fa-instagram"/>
                </a>
                <a href="https://linevoom.line.me/user/_dSZE7SBXtHG5NHb6y2UucGYDQQp0m4UTCEVh4RY" target="blank" className="btn-social">
                    <i className="fa-brands fa-line"/>
                </a>
                <a href="https://api.whatsapp.com/send/?phone=082215209344&text&type=phone_number&app_absent=0" target="blank" className="btn-social">
                    <i className="fa-brands fa-whatsapp"/>
                </a>
            </section>
        </div>
    )
}

export default Contact;