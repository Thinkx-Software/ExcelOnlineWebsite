import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "./Banner.css";
import { Button } from "@material-ui/core";

const Banner = () => {
    return (
        <div className="banner">
            <div className="banner__carousel">
                <Carousel

                    infiniteLoop
                    showIndicators={false}
                    showStatus={false}
                    showThumbs={false}
                    interval={2000}
                    autoPlay={true}
                    
                >
                    <div>
                        {/*put words */}

                        <div className="banner__words">
                            <div>
                                <h1>For all Secondary Schools Exams</h1>
                            </div>
                        </div>

                        <div className="banner__button">
                            <div>
                                <Button color="primary" variant="contained">Read More</Button>
                            </div>
                        </div>
                        {/*put words */}
                        <img
                            loading="lazy"
                            className="bannerHome__Image"
                            src="https://image.shutterstock.com/image-photo/my-heart-bubbles-sky-sunsetlove-260nw-221010295.jpg"
                        ></img>
                    </div>
                    <div>

                        {/*put words */}

                        <div className="banner__words">
                            <div>
                                <h1>HOME OF ACADEMIC SUCCESS</h1>
                            </div>
                        </div>

                        <div className="banner__button">
                            <div>
                                <Button color="primary" variant="contained">Read More</Button>
                            </div>
                        </div>
                        {/*put words */}
                        <img
                            loading="lazy"
                            className="bannerHome__Image"
                            src="https://media.istockphoto.com/photos/back-view-of-elementary-students-raising-their-arms-on-a-class-picture-id1000887536?k=6&m=1000887536&s=612x612&w=0&h=_766UYb-oBcmrJQfIn5RU6SWLhTVMLszO9JT5USUDQ0="
                        />
                    </div>
                </Carousel>
            </div>
        </div>
    );
};

export default Banner;


