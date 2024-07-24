import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import teaImage from "./assets/header2/tea.png";
import djangoImage from "./assets/header2/Django.png";
import backendImage from "./assets/header2/Backend.png";
import honoImage from "./assets/header2/hono.png";
import kubernetesImage from "./assets/header2/Kubernates.png";
import dockerImage from "./assets/header2/Docker.png";
import reactNativeImage from "./assets/header2/ReactNative.png";
import reactJsImage from "./assets/header2/Reactjs.png";
import mongoDbAggregationImage from "./assets/header2/MongoDb.png";
import gitImage from "./assets/header2/Git.png";
import fullstackNextJsImage from "./assets/header2/nExtjsMongoDb.png";
import nextJsMusicAcademyImage from "./assets/header2/NextJsMusicAcademy.png";
import pythonImage from "./assets/header2/Python.png";
import jsReactImage from "./assets/header2/JSreact.png";
import javascriptImage from "./assets/header2/Javascript.png";
import htmlImage from "./assets/header2/Html.png";
import C2 from "./assets/header1/C2.png";
import C3 from "./assets/header2/C3.png";
import "./Content.css";
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import { SlArrowLeft } from "react-icons/sl"
import { SlArrowRight } from "react-icons/sl"

const data = [
    { id: "1", pic: teaImage, title: "Buy me a Tea", para: "1 Lesson", price: "Rs 199" },
    { id: "2", pic: djangoImage, title: "Chai aur Django in Hindi", para: "9 Lessons", price: "FREE" },
    { id: "3", pic: backendImage, title: "Complete Backend Development with Javascript", para: "3 Lessons", price: "FREE" },
    { id: "4", pic: honoImage, title: "Full Stack Development with Hono and MongoDB", para: "1 Lesson", price: "FREE" },
    { id: "5", pic: kubernetesImage, title: "Kubernetes with Projects for Beginners", para: "2 Lessons", price: "FREE" },
    { id: "6", pic: dockerImage, title: "Learn Docker with Project", para: "1 Lesson", price: "FREE" },
    { id: "7", pic: reactNativeImage, title: "React Native Mastery with 10 projects", para: "59 Lessons", price: "FREE" },
    { id: "8", pic: reactJsImage, title: "Complete React for Beginners", para: "28 Lessons", price: "FREE" },
    { id: "9", pic: mongoDbAggregationImage, title: "MongoDB Aggregation Pipelines", para: "8 Lessons", price: "FREE" },
    { id: "10", pic: gitImage, title: "Git for Beginners", para: "10 Lessons", price: "FREE" },
    { id: "11", pic: fullstackNextJsImage, title: "Chai aur Full Stack NextJs in Hindi", para: "18 Lessons", price: "FREE" },
    { id: "12", pic: htmlImage, title: "Next Auth with MongoDb | Chai aur NextJS in Hindi", para: "9 Lessons", price: "FREE" },
    { id: "13", pic: nextJsMusicAcademyImage, title: "NextJs Music Academy Project|Chai aur NextJs in Hindi", para: "9 Lessons", price: "FREE" },
    { id: "14", pic: pythonImage, title: "Chai aur Python in Hindi", para: "29 Lessons", price: "FREE" },
    { id: "15", pic: backendImage, title: "JavaScript Backend in Hindi", para: "26 Lessons", price: "FREE" },
    { id: "16", pic: jsReactImage, title: "Chai aur React in Hindi", para: "35 Lessons", price: "FREE" },
    { id: "17", pic: javascriptImage, title: "Chai aur JavaScript in Hindi", para: "52 Lessons", price: "FREE" },
    { id: "18", pic: htmlImage, title: "Chai aur HTML in Hindi", para: "20 Lessons", price: "FREE" },
];

const offerPrice = 10000;
const actualPrice = 17000;
const discount = Math.round(((actualPrice - offerPrice) / actualPrice) * 100);

const NextArrow = ({ onClick }) => {
    return (
        <div className="arrow next" onClick={onClick}>
            <SlArrowRight />
        </div>
    );
};

const PrevArrow = ({ onClick }) => {
    return (
        <div className="arrow prev" onClick={onClick}>
            <SlArrowLeft />
        </div>
    );
};

const Content = () => {
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
    };

    return (
        <>
            <div className="content-header">
                <h1 className="htitle">Courses<span className="eighteen">18</span></h1>
                <button className="viewall">View All</button>
                <div className="content-slider">
                    <Slider {...settings}>
                        {data.map((item) => (
                            <div key={item.id} className="content-box">
                                <img src={item.pic} alt={item.title} className="content-image" />
                                <div className="course-details">
                                    <h3 className="course-title">{item.title}</h3>
                                    <p className="course-para">{item.para}</p>
                                    <h4 className="course-price">{item.price}</h4>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
                <h1 className="batches__h1">Batches <span className="batch-count">02</span></h1>
                <div className="batch-container">
                    <div className="batch-box">
                        <img src={C2} alt="" className="batch-image" />
                        <div className="batch-details">
                            <h2>30 days of Javascript challenge</h2>
                            <h4>1 Course</h4>
                            <p>30 days of Javascript challenge</p>
                        </div>
                        <div className="batch-free">
                            <span>FREE</span>
                        </div>
                    </div>
                    <div className="batch-box">
                        <img src={C3} alt="" className="batch-image" />
                        <div className="batch-details">
                            <h2>Interview Preparation with Javascript 2.0</h2>
                            <h4>7 Courses</h4>
                            <p>A complete guide to prepare you for all interview rounds for your upcoming interviews.
                                Everything is taught in Javascript with easy to understand style in HINDI. Includes 18%...</p>
                        </div>
                        <div className="spanfree2">
                            <span className="span3">₹{offerPrice}</span>
                            <span className="span4">₹{actualPrice}</span>
                            <button className="btn5">{discount}% OFF</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Content;
