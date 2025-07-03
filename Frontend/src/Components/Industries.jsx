// import React from "react";
// import Card from "./Card";
// import "./Industries.css";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// const Industries = () => {
//     const cardsData = [
//         { title: "Technology", description: "Technology as  a service is a business model offering on-demand access to cutting-edge technologies like cloud computing, AI, and data analytics, enabling businesses to leverage innovation without upfront investment or infrastructure management." },
//         { title: "HealthCare", description: 
//           "The healthcare field focuses on patient care, innovation, and disease prevention, integrating technologies like AI and telemedicine. It faces challenges but evolves to offer personalized, efficient solutions for improved patient outcomes." },
//         { title: "Banking", description: "Banking provides financial services like savings, loans, and investments, facilitating economic growth. It embraces technology for secure transactions, digital banking, and personalized services, enhancing convenience and accessibility for customers globally." },
//         { title: "Education", description: "Education empowers individuals with knowledge and skills, promoting personal and societal growth. It encompasses traditional and digital learning, utilizing technology to enhance accessibility, engagement, and personalized learning experiences for all." },
//         { title: "Finance", description: "Finance involves managing money, investments, and financial planning. It includes areas like banking, insurance, and investments, using strategies and technologies to maximize returns, manage risk, and ensure economic stability." },
//     ];

//     const settings = {
//         dots: true,
//         infinite: true,
//         slidesToShow: 3,
//         slidesToScroll: 1,
//         autoplay: true,
//         speed: 2000,
//         autoplaySpeed: 2000,
//         cssEase: "linear",

//         responsive: [
//             {
//               breakpoint: 1024,
//               settings: {
//                 slidesToShow: 3,
//                 slidesToScroll: 3,
//                 infinite: true,
//                 dots: true
//               }
//             },
//             {
//               breakpoint: 600,
//               settings: {
//                 slidesToShow: 2,
//                 slidesToScroll: 2,
//                 initialSlide: 2
//               }
//             },
//             {
//               breakpoint: 480,
//               settings: {
//                 slidesToShow: 1,
//                 slidesToScroll: 1
//               }
//             }
//           ]
//     };

//     return (
//         <div className="card-container">
//             <h1 className="container-heading">Discover Our Exceptional Solutions For Every Industry.</h1>
//             <div className="carousel-wrapper">
//             <Slider {...settings}>
//                 {cardsData.map((card, index) => (
//                     <Card key={index} title={card.title} description={card.description} />
//                 ))}
//             </Slider>
//             </div>
//         </div>
//     );
// };

// export default Industries;




import React from "react";
import Card from "./Card";
import "./Industries.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import techImage from '../assets/images/technology.png';
import EduImage from '../assets/images/education.png';
import healthImage from '../assets/images/healthcare.png';
import BankingImage from '../assets/images/banking.png';
import FinanceImage from '../assets/images/finance.png';




const Industries = () => {
    const cardsData = [
 
        { title: "Technology", imageUrl: techImage },
        { title: "HealthCare", imageUrl: healthImage },
        { title: "Banking", imageUrl: BankingImage },
        { title: "Education", imageUrl: EduImage },
        { title: "Finance", imageUrl: FinanceImage },
    ];


//  this is the settings for the slider whuse the react-slick library 

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear",

        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div className="card-container">
            <h1 className="container-heading">Discover Our Exceptional Solutions For Every Industry.</h1>
            <div className="carousel-wrapper">
                <Slider {...settings}>
                    {cardsData.map((card, index) => (
                        <div key={index} className="card">
                            <h2 className="card-title">{card.title}</h2>
                            <img src={card.imageUrl} alt={card.title} className="industry-image" />
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default Industries;
