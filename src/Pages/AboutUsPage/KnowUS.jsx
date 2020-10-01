import React from 'react'
import ClassNames from "./AboutUs.module.scss"; 
import Image from "../../Images/5.jpg";
import Muted from "../../Components/UI/TextMuted";
function KnowUS() {
    return (
        <section className = {ClassNames.KnowUs}>
            <div className = {ClassNames.ImageContainer}>
                <img src ={Image} alt = "About Us" />
            </div>
            <div className = {ClassNames.DiscContainer}>
                <h2 className = {ClassNames.Title}>GET TO KNOW US </h2>
                <Muted>
                    Div Systems is a Software Development company that introduce software products development services for financial Institutions by providing dedicated 
                    groups of highly-skilled and creative programmers.
                </Muted>
                <Muted>
                    We always strive to be up to our customers’ expectations and to deliver high standard web and mobile solutions which designed in a very unique and attractive way 
                    also we look forward to helping our customers achieve constant growth by offering them the best solutions for their businesses based on data analysis and Artificial intelligence.
                </Muted>
                <Muted>
                    Our team delivers high-quality software products that performs better for customer requirements, environment and constraints using the latest technologies.
                </Muted>
                <Muted>
                    We follows Quality Control standards and methodologies in which the software passes through different tests to ensure the quality goals, 
                    the fulfillment of the customer requirements in addition to the software response under high load
                </Muted>
            </div>
        </section>
    )
}

export default KnowUS
