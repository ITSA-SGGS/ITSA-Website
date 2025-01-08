import React from "react";
import { BsInstagram, BsLinkedin, BsTwitter, BsGithub } from "react-icons/bs";
import LeadsCard from "./components/LeadsCard";
import leadsData from "./data/leadsData";
import TechnicalCard from "./components/TechnicalCard";
import technicalData from "./data/technicalData";
import SportsCard from "./components/SportsCard";
import sportsData from "./data/sportsData";
import CulturalCard from "./components/CulturalCard";
import culturalData from "./data/culturalData";
import MediaCard from "./components/MediaCard";
import mediaData from "./data/mediaData";
import AluminiCard from "./components/AluminiCard";
import aluminiData from "./data/aluminiData";
import FinanceCard from "./components/FinanceCard";
import financeData from "./data/financeData"
import AnchorCard from "./components/AnchorCard";
import anchorData from "./data/anchorData";
import AOS from "aos";
import "aos/dist/aos.css";
import FacultyCoordinators from "./data/FacultyCoordinators";
import Faculty from "./components/FacultyCard";
export default function Teams() {
    React.useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);
    return (
        <div className=" bg-gray-100">
            <section className="  mx-auto   max-w-7xl overflow-hidden px-4 sm:px-6 ">
                <article className="col-auto mb-10 mt-10">
                    <div data-aos="fade-up" data-aos-duration="1000" className="title-font mb-20 text-center text-2xl font-medium text-gray-700 sm:text-3xl">
                        <p className="title-font mb-4 text-center text-5xl font-bold text-teal-600 sm:text-3xl">
                            {/* <span className="">Meet The Team</span><br /> */}
                            Our Passionate Team Members
                        </p>
                    </div>
                    
                    {/* Chapter Leads */}
                    <h1 data-aos="fade-up" data-aos-duration="1000" className=" title-font mb-20 text-center text-2xl font-medium text-gray-900 sm:text-3xl ">
                        Our Leads
                    </h1>
                    <section className=" flex flex-wrap justify-center gap-5">
                        {leadsData.map(leads => (
                            <LeadsCard leads={leads} key={leads.title} />
                        ))}
                    </section>
                </article>
                {/* Faculty Co-ordinators */}
                <article className="col-auto mb-10 mt-10">
                    <h1 data-aos="fade-up" data-aos-duration="1000" className=" title-font mb-20 text-center text-2xl font-medium text-gray-900 sm:text-3xl ">
                        Faculty Co-ordinators
                    </h1>
                    <section className=" flex flex-wrap justify-center gap-5">
                        {FacultyCoordinators.map(faculty => (
                            <Faculty faculty={faculty} key={faculty.title} />
                        ))}
                    </section>
                </article>
                {/* Technical Committee */}
                <article className="col-auto mb-10 mt-10">
                    <h1 data-aos="fade-up" data-aos-duration="1000" className=" title-font mb-20 text-center text-2xl font-medium text-gray-900 sm:text-3xl ">
                        Technical Committee
                    </h1>
                    <section className=" flex flex-wrap justify-center gap-5">
                        {technicalData.map(tech => (
                            <TechnicalCard tech={tech} key={tech.title} />
                        ))}
                    </section>
                </article>

                {/* Cultural Committee */}
                <article className="col-auto mb-10 mt-10">
                    <h1 data-aos="fade-up" data-aos-duration="1000" className=" title-font mb-20 text-center text-2xl font-medium text-gray-900 sm:text-3xl ">
                        Cultural Committee
                    </h1>
                    <section className=" flex flex-wrap justify-center gap-5">
                        {culturalData.map(cul=> (
                            <CulturalCard cul={cul} key={cul.title} />
                        ))}
                    </section>
                </article>

                {/* Sports Committee */}
                <article className="col-auto mb-10 mt-10">
                    <h1 data-aos="fade-up" data-aos-duration="1000" className=" title-font mb-20 text-center text-2xl font-medium text-gray-900 sm:text-3xl ">
                        Sports Committee
                    </h1>
                    <section className=" flex flex-wrap justify-center gap-5">
                        {sportsData.map(sports=> (
                            <SportsCard sports={sports} key={sports.title} />
                        ))}
                    </section>
                </article>

                {/* Media Committee */}
                <article className="col-auto mb-10 mt-10">
                    <h1 data-aos="fade-up" data-aos-duration="1000" className=" title-font mb-20 text-center text-2xl font-medium text-gray-900 sm:text-3xl ">
                        Media Committee
                    </h1>
                    <section className=" flex flex-wrap justify-center gap-5">
                        {mediaData.map(media=> (
                            <MediaCard media={media} key={media.title} />
                        ))}
                    </section>
                </article>

                {/* Alumini Committee */}
                <article className="col-auto mb-10 mt-10">
                    <h1 data-aos="fade-up" data-aos-duration="1000" className=" title-font mb-20 text-center text-2xl font-medium text-gray-900 sm:text-3xl ">
                        Alumini Relation Committee
                    </h1>
                    <section className=" flex flex-wrap justify-center gap-5">
                        {aluminiData.map(alumini=> (
                            <AluminiCard alumini={alumini} key={alumini.title} />
                        ))}
                    </section>
                </article>

                {/* Finance Committee */}
                <article className="col-auto mb-10 mt-10">
                    <h1 data-aos="fade-up" data-aos-duration="1000" className=" title-font mb-20 text-center text-2xl font-medium text-gray-900 sm:text-3xl ">
                        Finance Committee
                    </h1>
                    <section className=" flex flex-wrap justify-center gap-5">
                        {financeData.map(finance=> (
                            <FinanceCard finance={finance} key={finance.title} />
                        ))}
                    </section>
                </article>

                {/* Anchor Committee */}
                <article className="col-auto mb-10 mt-10">
                    <h1 data-aos="fade-up" data-aos-duration="1000" className=" title-font mb-20 text-center text-2xl font-medium text-gray-900 sm:text-3xl ">
                        Anchor Committee
                    </h1>
                    <section className=" flex flex-wrap justify-center gap-5">
                        {anchorData.map(anchor=> (
                            <AnchorCard anchor={anchor} key={anchor.title} />
                        ))}
                    </section>
                </article>
            </section>
        </div>
    );
}
