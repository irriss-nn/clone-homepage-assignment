// Importing necessary modules and components
import React from 'react';
import Body from '../../Components/Body';

import "./homepage.css";

import { AiFillLinkedin, AiOutlineTwitter } from "react-icons/ai";

// Define the functional component "Homepage"
const Homepage = () => {
    return (
        // Outer div with background and full viewport height
        <div className="home" style={{ background: "url(../img/bg.png)", height: "100vh", backgroundSize: "cover" }}>
            
            {/* Container for main content */}
            <div className="container h-100">
                {/* Row for layout alignment */}
                <div className="row align-items-center justify-content-center h-100">
                    
                    {/* Left Content */}
                    <div className="col-12 col-lg-6 fw-bold text-center">
                        {/* Main Headings */}
                        <h1 className="font-weight-bold text-white">Data-powered solutions</h1>
                        <h1 className="font-weight-bold text-white">for Industrial Excellence</h1>
                        
                        {/* Read More Button */}
                        <div className="mt-3 custom-allign">
                            <button className="btn btn-primary btn-lg move-left" >Read More</button>
                        </div>
                    </div>

                    {/* Right Content */}
                    <div className="col-12 col-lg-6 banner text-center">
                        {/* Banner Image */}
                        <img src="./img/icon.png" width={"100%"} alt="" />
                    </div>
                </div>
            </div>
            
            {/* Additional Content Section */}
            <div className="container my-5">
                
                {/* First Block */}
                <Body
                    titleLines={["Mine-To-Mill-To-Mine", "Optimization"]}
                    paragraphs={[
                        "NTWIST’s newest product unlocks up to $250/oz in previously inaccessible value in open pit gold mines by connecting siloed data sources like block models, fleet management systems, stockpile surveys, and plant instruments. This allows your company to better track material flow, and feed properties, identify plan/production discrepancies, and correct resource models and production plans.",
                    ]}
                    imageSrc="./img/first.png"
                />

                {/* Second Block with reverse layout */}
                <Body
                    titleLines={["Sustainability"]}
                    paragraphs={[
                        "Environmental stewardship is a priority for NTWIST. We help our customers to minimize their sustainability  impact on the planet. Emissions or environmental targets are used alongside productivity targets to define success for our customers.",
                      
                        
                        "With the increasing relevance of carbon accounting and emissions tracking, NTWIST offers a suite of tools to increase visibility into environmental performance and help processing plants track, manage, optimize, and report key metrics."
                    ]}
                    imageSrc="./img/second.jpg"
                    reversed
                />

                {/* Third Block */}
                <Body 
                    titleLines={["Mineral Processing"]}
                    paragraphs={[
                        "NTWIST offers a number of solutions for mills, concentrators, and leach plants. Our solutions help operations to reduce the effect of feed variability, avoid downtime and increase peak throughput while decreasing energy and reagent consumption.",
                    ]}
                    imageSrc="./img/third.png"
                />

                {/* Fourth Block with reverse layout */}
                <Body
                    titleLines={["Oil & Gas"]}
                    paragraphs={[
                        "Oil and Gas plants require a high level of control and robustness in their operation due to the high risks to people and environment. ",
                        "NTWIST offers a number of solutions for Oil & Gas plants. Our solutions help operations to reduce the effect of feed variability, avoid downtime and increase peak throughput while decreasing energy and reagent consumption.",
                     
                    ]}
                    imageSrc="./img/last.png"
                    reversed
                />
            </div>

            <div className="foot">
                <div className="logo">
                    <img src="./img/logo.png" alt="Company Logo" />
                </div>
  
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Privacy Policy</li>
                    <li>Sitemap</li>
                </ul>
  
                <div className="my-3">
                    <h2 style={{ fontSize: "15px", fontWeight: 500, color: "#6f7f92" }}>
                    9650 20 Ave NW, Edmonton, AB, T6N 1G1, Canada
                    </h2>
                </div>
  
                <div className="social">
                    <button><AiOutlineTwitter size={20} /></button>
                    <button><AiFillLinkedin size={20} /></button>
                </div>
  
                <div className="my-3">
                    <h2 style={{ fontSize: "15px", fontWeight: 500, color: "#6f7f92" }}>
                    © 2022. Ntwist Inc.
                    </h2>
                </div>
            </div>
</div>
        
    );
};


export default Homepage;
