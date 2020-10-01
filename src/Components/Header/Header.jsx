import React, { useState, useLayoutEffect} from 'react'
import ClassNames from "./Header.module.scss";
import Logo from "../../Images/logo.png";
import { Link } from "react-router-dom";

function Header() {
    const [isOpened, setHeaderOpened] = useState(false);
    const [isSticky, setSticky] = useState(false);

    // this is to handle the Toggle Button .
    useLayoutEffect(() => {
        const handleResize = () => {
            setHeaderOpened(!window.innerWidth>622) ;
        }
        window.addEventListener("resize", handleResize)
        // this is the Cleaning Up . 
        return () => window.removeEventListener("resize", handleResize);
    });

    // this is to handle the Stickness of the Header ;
    useLayoutEffect(() => {
        const handleScroll = () => {
            const sticky = window.pageYOffset >= 200
            setSticky(sticky);
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    })

    const routes = [
        { title: "Home", url: "/" },
        { title: "Serveices", url: "/services" },
        { title: "About Us", url: "/about-us" },
        { title: "Contact Us", url: "/contact-us" },
    ]
    function toggleHeader() {
        setHeaderOpened(prevState => !prevState);
    }
    let AppliedClasses = [ClassNames.Header];
    isOpened ? AppliedClasses.push(ClassNames.HeaderOpened) : AppliedClasses.push(ClassNames.HeaderClosed);
    isSticky ? AppliedClasses.push(ClassNames.Sticky) : AppliedClasses.push(' ');

    return (
        <header className={AppliedClasses.join(" ").trim()}>
            <div className={ClassNames.Container}>
                <h1>
                    <Link to ="/"><img src={Logo} alt="The Logo" title="The Logo" className={ClassNames.Logo} /></Link>
                    <button className={ClassNames.HeaderToggler} onClick={toggleHeader}> toggle</button>
                </h1>
                <ul className={ClassNames.RoutsList}>
                    {routes.map((route, index) => {
                        return (
                            <li key={index}>
                                <Link to={route.url} > {route.title} </Link>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </header>
    )
}

export default Header;