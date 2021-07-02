import React from 'react'
import "./HowToPayCard.css";
import { Link } from "react-router-dom"
import { Grid } from '@material-ui/core';
import DescriptionIcon from '@material-ui/icons/Description';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
function HowToPayCard() {
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
                                    src="https://images.pexels.com/photos/50987/money-card-business-credit-card-50987.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                                />
                            </div>
                            {/*image */}
                            {/*content */}
                            <div className="about__content">
                                <p>

                            You can pay for our courses using paypal from your paypal account or master card account
                            .We also accept bank payments , visa card payment and lastly we also accept mobile money payments.
                            For any form of payment the money is converted into the our local currency .
                            Please if you have any difficult contct us:(256759983853) or Email us :(katznicho@gmail.com) <Link>Make Payment</Link>

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

export default HowToPayCard
