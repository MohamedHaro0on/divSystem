import React from 'react'
import ClassNames from "./HomePage.module.scss";
import WelcomeImage from "../../Images/design-1.jpg";
import Button from '../../Components/UI/Button';
import Muted from '../../Components/UI/TextMuted';
import DarkBlue from '../../Components/UI/TextDarkBlue';

function Welcome() {
    return (
        <section className={ClassNames.Welcome}>
            <img src={WelcomeImage} alt="Welcome to Div Systems" title="welcome to div systems" className={ClassNames.WelcomeImage} />
            <div className = {ClassNames.Discription}>
                <DarkBlue>Welcome to Div Systems</DarkBlue>
                <h4>Soft Ware Development Company.</h4>
                <DarkBlue>Development is the future of everything.</DarkBlue>
                <Muted>Let us take you into a deeper experience, make a moment a lasting conveyable memory. Let us help build your tribe.</Muted>
                <Button>More About Us</Button>
            </div>
        </section>
    )
}

export default Welcome
