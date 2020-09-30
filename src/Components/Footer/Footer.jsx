import React from 'react'
import { Link } from 'react-router-dom';
import ClassNames from "./Footer.module.scss";

function Fotoer() {
    const links = [
        { title: "Home", Url: "/" },
        { title: "About Us", Url: "/about-us" },
        { title: "contactUs", Url: "/contact-us" },
    ]
    return (
        <div className={ClassNames.Footer}>
            <div className={ClassNames.Container}>
                <div className={ClassNames.DivSystems}>
                    <h2>div Systems</h2>
                    <p>Let us take you into a deeper experience, make a moment a lasting conveyable memory. Let us help build your tribe.</p>
                </div>
                <div className={ClassNames.LinksContainer}>
                    <h2> Links </h2>
                    <ul>
                        {links.map((link, index) => {
                            return (
                                <li key={index}>
                                    <Link to={link.Url}> {link.title}</Link>
                                </li>
                            )
                        })}
                    </ul>
                </div>
                <div className={ClassNames.CompanyLocation}>
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d215.92648098369966!2d31.324386278515956!3d30.013218385358748!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2seg!4v1581111559936!5m2!1sen!2seg"
                        width="100%" height="300" frameborder="0"  allowfullscreen="">
                     </iframe>
                </div>
            </div>
        </div>
    )
}

export default Fotoer
