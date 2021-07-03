import React from 'react'
import "./AboutusCard.css";
import { Link } from "react-router-dom"
import { Grid } from '@material-ui/core';
import DescriptionIcon from '@material-ui/icons/Description';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
function AboutusCard() {
    return (
        <div className="aboutuscard">
            <div className="aboutuscard__details">
                <Grid container spacing={2}>
                    <Grid item md={9}>
                        {/* box1*/}
                        <div className="aboutuscard__about">
                            <div className="about__header">
                                <h2>About Us</h2>
                            </div>
                            {/*image */}
                            <div className="aboutus__image">
                                <img
                                    loading="lazy"
                                    alt="not found"
                                    src="https://images.pexels.com/photos/3729557/pexels-photo-3729557.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                                />
                            </div>
                            {/*image */}
                            {/*content */}
                            <div className="about__content">
                                <p>
                                    Excel Online is an E-Learning established platform in Uganda to provide high quality lessons for
                                    seccondary school students seeking admission into the university. Our courses are designed for the majority of
                                    the approved UCE AND UACE examinations in Uganda and provides the followed allowed Ugandan curriculum.
                                    The authors who teach are highly qualified and experienced approved by the National Council of Education and Sports.
                                    Several Students have enrolled for our online learning with our lessons, they have been able to pass highly with
                                    high grades and some have testimonials.View the testimonials on the home page.So Many of them have proceeded to
                                    Certified universties in Uganda such as Makerere University , Mbarara University, Kyambogo and others
                                    .Join our success community become the story and we tell the story for you.<Link>Enroll Now</Link>

                                </p>
                            </div>
                            {/*content */}
                        </div>

                    </Grid>
                    <Grid item md={3}>

                        <div className="aboutuscard__forum">
                            <div className="forum__activities">
                                <h5>Activities</h5>
                            </div>
                            <div className="forum__forum">
                                <div className="forum__forum1">
                                    <QuestionAnswerIcon  color="blue"/>
                                    <Link>Forums</Link>

                                </div>
                                <div className="forum__forum1">
                                    <DescriptionIcon  color="blue"/>
                                    <Link>
                                        Resources
                                    </Link>

                                </div>


                            </div>
                        </div>
                        {/*bix2 */}

                    </Grid>



                </Grid>



            </div>

        </div>
    )
}

export default AboutusCard
