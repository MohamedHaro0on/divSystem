import React, { useState, useLayoutEffect } from 'react'
import ClassNames from "./Header.module.scss";
import Logo from "../../Images/logo.png";
import { Link } from "react-router-dom";

function Header() {
    const [isOpened, setHeaderOpened] = useState(false);

    useLayoutEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 622 ) {
                setHeaderOpened(false);
            }
        }
        window.addEventListener("resize", handleResize)
        // this is the Cleaning Up . 
        return () => window.removeEventListener("resize", handleResize);
    });

    
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
    if (isOpened) {
        AppliedClasses.push(ClassNames.HeaderOpened)
    }
    else {
        AppliedClasses.push(ClassNames.HeaderClosed);
    }
    return (
        <header className={AppliedClasses.join(" ").trim()}>
            <div className={ClassNames.Container}>
                <h1>
                    <img src={Logo} alt="The Logo" title="The Logo" className={ClassNames.Logo} />
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