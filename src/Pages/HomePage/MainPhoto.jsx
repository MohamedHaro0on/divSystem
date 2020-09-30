import React from 'react'
import ClassNames from "./HomePage.module.scss";
function MainPhoto() {
    return (
        <section className={ClassNames.MainPhoto}>
            <div className={ClassNames.Container}>
                <h2>Soft ware development company</h2>
                <h3>Artifical Intellegance Company.</h3>
                <p>Development is the future of everything.</p>
            </div>
        </section>
    )
}

export default MainPhoto;