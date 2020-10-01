import React from 'react'
import ClassNames from "./AboutUs.module.scss";

function MainPhoto() {
    return (
        <section className={ClassNames.MainPhoto}>
            <div className = {ClassNames.OverLay}>
                <div>
                    <h2>About Us</h2>
                    <p>Development is the future of Evrey thing .</p>
                </div>
            </div>
        </section>
    )
}

export default MainPhoto
