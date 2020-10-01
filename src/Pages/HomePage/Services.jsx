import React from 'react'
import BusinessSolutions from "../../Images/1.png";
import Fintech from "../../Images/3.png";
import Web from "../../Images/f-icon-1.png";
import Mobile from "../../Images/f-icon-2.png";
import Testing from "../../Images/f-icon-3.png";
import Consulting from "../../Images/2.png";
import ClassNames from "./HomePage.module.scss";
import Button from '../../Components/UI/Button';
import { Link } from 'react-router-dom';
import DarkBlue from '../../Components/UI/TextDarkBlue';
import Muted from '../../Components/UI/TextMuted';
function Services() {
    const Cards = [
        {
            image: BusinessSolutions,
            title: "Business Solutions",
            disc: "We bring our talent to your project when and where you need it most whether it's temporary or long-term, a custom implementation solution, or developing a software application.",
            href: "/business-solutions"
        },
        {
            image: Fintech,
            title: "Fintech Solutions",
            disc: "Div provides qualified development team services for fintech firms and advanced software product development services. We design e-commerce and financial applications for wide-scale businesses.",
            href: "/business-solutions"
        },
        {
            image: Web,
            title: "Web",
            disc: "Web Design and Web Development solutions to deliver a complete online digital solution extension to your business allowing people to interact and connect with you in an easy way.",
            href: "/business-solutions"
        },
        {
            image: Mobile,
            title: "Mobile Application",
            disc: "Build Professional Native iOS and Android Mobile Apps with a experienced Mobile Applications Designers and Developers working on IOS and Android Platforms to bring your ideas into reality. ",
            href: "/business-solutions"
        },
        {
            image: Testing,
            title: "Software Testing",
            disc: "Professional testing team to test your company capabilities and experience in web and mobile application.We test customer-facing using a community of professional software testers.",
            href: "/business-solutions"
        },
        {
            image: Consulting,
            title: "Consulting Services",
            disc: "Fortuler help in changing capacity and business issues by renaming structures and advances which are less mind-boggling to realize, simple to utilize and quantifiable for delegates to perform.",
            href: "/business-solutions"
        },
    ]
    return (
        <section className={ClassNames.Services}>
            <h2> Services </h2>
            {Cards.map((content, index) => {
                return (
                    <div className={ClassNames.Card} key={index}>
                        <div>
                            <img src={content.image}  alt={content.title} />
                            <DarkBlue>{content.title}</DarkBlue>
                            <Muted> {content.disc} </Muted>
                            <Button>
                                <Link to={content.href}> {content.title}</Link>
                            </Button>
                        </div>
                    </div>
                )
            })}
        </section>
    )
}

export default Services
