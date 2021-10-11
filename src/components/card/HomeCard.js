import { Grid } from '@material-ui/core'
import React from 'react'
import "./HomeCard.css";
import TouchAppIcon from '@material-ui/icons/TouchApp';
import ComputerIcon from '@material-ui/icons/Computer';
import PaymentIcon from '@material-ui/icons/Payment';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import { Link } from "react-router-dom"
function HomeCard() {
    return (
        <div className="homecard">
            <div className="homecard__details">
                <Grid spacing={3} container>
                    <Grid item sm={12} md={3}>
                        <Link to={{ pathname: "http://excelonlineschool.ac.ug/excel/login/index.php" }} target="_blank">

                            <div className="card__detailsfirst">
                                <div className="card__detailsfirstInfo">
                                    <TouchAppIcon fontSize="large" className="homeIcon" />
                                </div>
                                <div className="homecard__detailsh4">
                                    <h6>LEARN ONLINE</h6>
                                </div>
                                <div className="home__para">
                                    <p className="home__paragraph">
                                        Online Courses enable students learn from anywhere and at any time
                                    </p>
                                </div>


                            </div>
                        </Link>

                    </Grid>

                    <Grid item sm={12} md={3}>
                        <Link to={{ pathname: "http://excelonlineschool.ac.ug/excel/login/index.php" }} target="_blank">
                            <div className="card__detailsSecond">
                                <div className="card__detailsSecondInfo">
                                    <ComputerIcon className="homeIcon" />
                                </div>
                                <div className="homecard__detailsh4">
                                    <h6>ENROLL NOW</h6>
                                </div>
                                <div>
                                    <p className="home__paragraph">
                                        Enrol for the topics of your choice and gain mastery knowlege of the topic enrolled for.
                                    </p>
                                </div>


                            </div>
                        </Link>

                    </Grid>
                    <Grid item sm={12} md={3}>
                        <Link to="/howtopay">
                            <div className="card__detailsThird">
                                <div className="card__detailsThirdInfo">
                                    <PaymentIcon className="homeIcon" />
                                </div>
                                <div className="homecard__detailsh4">
                                    <h6>HOW TO PAY</h6>
                                </div>
                                <div>
                                    <p className="home__paragraph">
                                        Keep a regular study schedule and you will become an expert in your chosen subject
                                    </p>
                                </div>


                            </div>
                        </Link>

                    </Grid>
                    <Grid item sm={12} md={3}>
                        <Link to={{ pathname: "http://excelonlineschool.ac.ug/excel/login/index.php" }} target="_blank">
                            <div className="card__detailsFour">
                                <div className="card__detailsFourInfo">
                                    <AttachMoneyIcon className="homeIcon" />
                                </div>
                                <div className="homecard__detailsh4">
                                    <h6>EARN MONEY</h6>
                                </div>
                                <div>
                                    <p className="home__paragraph">
                                        Join our Teaching Network as a contributor of Knowledge and earn extra cash.
                                    </p>
                                </div>


                            </div>
                        </Link>

                    </Grid>
                </Grid>

            </div>

        </div>
    )
}

export default HomeCard
