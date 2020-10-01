import React, { useEffect, useState } from 'react'
import ClassNames from "./HomePage.module.scss";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import CarouselsFirstImage from "../../Images/post-s-1.jpg";
import CarouselSecondImage from "../../Images/post-s-2.jpg";
import CarouselThirdImage from "../../Images/post-s-3.jpg";
import CarouselForthImage from "../../Images/post-s-4.jpg";
function OurOfferes() {
    const [items, setItems] = useState(SetITemsAccordingToWindowWidth);

    function SetITemsAccordingToWindowWidth (){
        let width = window.innerWidth;
        if (width > 1500) {
            return 4;
        }
        else if (width < 1500 && width > 1000) {
            return 3 ;
        }
        else if (width > 800 && width < 1000) {
            return 2 
        }
        else {
            return 1 ;
        }
    }

    useEffect(() => {
        const handleResize = () => {
            console.log("this is the function Call ")
            setItems(SetITemsAccordingToWindowWidth)

        }
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    })
    const CarouselItems = [
        {
            image: CarouselsFirstImage,
            Caption: "Delivery in Time."
        },
        {
            image: CarouselSecondImage,
            Caption: "Secured."
        },
        {
            image: CarouselThirdImage,
            Caption: "Ai technology."
        },
        {
            image: CarouselForthImage,
            Caption: "Data Analysis."
        },
    ]
    return (
        <section className={ClassNames.OurOffers}>
            <h2 className={ClassNames.OurOffersTitle}>What we Offer to our Clients</h2>
            <OwlCarousel
                items={items}
                loop
                margin={0}
            >
                {CarouselItems.map((item, index) => {
                    return (
                        <div className={ClassNames.Container} key={index}>
                            <div className={ClassNames.OverLay}> <h4>{item.Caption}</h4></div>
                            <img src={item.image} alt = {item.Caption} />
                        </div>
                    )
                })}
            </OwlCarousel>
        </section>
    )
}

export default OurOfferes
