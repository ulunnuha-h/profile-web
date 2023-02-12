import React, { useState } from "react";
import img1 from "../Assets/1.png";
import img2 from "../Assets/2.png";
import img3 from "../Assets/3.png";

const paginateStyle = (page,activePage) => {
    let style = "paginate";
    if(page === activePage) style = "active";
    return style
}

const prevStyle = (page) => {
    if(page === 0) return "cursor-default text-gray-600"
    else return "cursor-pointer"
}

const nextStyle = (page) => {
    if(page === 3) return "cursor-default text-gray-600"
    else return "cursor-pointer"
}

const Project = ({data}) => {
    const [page,setPage] = useState(0);

    const nextPage = () => {
        if(page < 3) setPage(page+1);
    }

    const prevPage = () => {
        if(page > 0) setPage(page-1);
    }

    const changePage = (pageNumber) => setPage(pageNumber);

    return(
        <main className="min-h-screen flex justify-center items-center flex-col" id="project">
            {
                page === 3 ? 
                <h2 className="text-gray-200 my-36">See other projects on 
                    <a href="https://github.com/ulunnuha-h" className="text-orange-400 hover:text-orange-600"> Github <i className="fa-brands fa-square-github"></i></a>
                </h2>
                :
                <div className="flex lg:w-3/4 2xl:w-3/5">
                    <div className="flex text-gray-200 lg:flex-row flex-col-reverse mx-3">
                        <section className="lg:basis-1/2 lg:px-7 py-2 flex flex-col justify-center">
                            <p className="text-justify bg-slate-100 text-slate-800 p-5 rounded-md">{data[page].desc}</p>
                            <p className="mt-3">Responsibility</p>
                            <ul className="list-disc list-inside font-baskerville text-sm">
                                {
                                    data[page].resp.map( (val,idx) => <li key={idx}>{val}</li> )
                                }
                            </ul>
                            <a href={data[page].github} className="mt-3 w-fit"><i className="fa-brands fa-square-github text-2xl hover:text-gray-400"></i></a>
                        </section>
                        <section className="lg:basis-1/2 border-l-gray-500 lg:border-l-2 lg:pl-5 flex flex-col justify-start">
                            <img src={data[page].img} alt="webimage"></img>
                            <h2 className="m-0 mt-6">{data[page].title}</h2>
                            <p className="text-sm">{data[page].tech}</p>
                        </section>
                    </div>
                </div>
            }
            <ul className="flex mt-8 gap-4 text-gray-200 font-baskerville">
                <li onClick={prevPage} className={prevStyle(page)}>Prev</li>
                <li className={paginateStyle(page,0)} onClick={()=>changePage(0)}>1</li>
                <li className={paginateStyle(page,1)} onClick={()=>changePage(1)}>2</li>
                <li className={paginateStyle(page,2)} onClick={()=>changePage(2)}>3</li>
                <li className={paginateStyle(page,3)} onClick={()=>changePage(3)}>4</li>
                <li onClick={nextPage} className={nextStyle(page)}>Next</li>
            </ul>
        </main>
    )
}

const projectData = [
    {
        title : "IF ELSE Website",
        desc : "Website for IF ELSE (Informatics Education and Learning for Society Enhancement). It is a Development Program for Informatics Engineering of Brawijaya University freshman students.",
        github : "https://github.com/ulunnuha-h/IF-ELSE-Frontend-2022",
        resp : ["Implementing web design from figma with React Js and Bootstrap","Binding Rest API with backend team","Make admin page for data CRUD"],
        tech: "HTML CSS Javascript React Bootstrap",
        img : img1
    },
    {
        title : "BantuDesa Website",
        desc : "Website (E-Commerce) that brings together Villages who need assistance for village development with University Students (Teams) who are in need of projects and incentives.",
        github : "https://github.com/ulunnuha-h/bantudesa-frontend",
        resp : ["Implementing web design from figma with React Js and Bootstrap"],
        tech: "HTML CSS Javascript React Bootstrap",
        img : img2
    },
    {
        title : "Healour Website",
        desc : "Website that help people to easily book for travel tour pack which include hotel and tourpackages",
        github : "https://github.com/ulunnuha-h/healour-frontend",
        resp : ["Implementing web design from figma with HTML, CSS, Javascript","Designing website with figma"],
        tech: "HTML CSS Javascript Figma",
        img : img3
    }
]

const ProjectContainer = () => {
    return(
        <Project data={projectData}/>
    )
}

export default ProjectContainer;