import { Grid } from '@material-ui/core'
import React from 'react'
import "./Counter.css";
import CountUp from 'react-countup';
function Counter() {
    return (
        <div className="counter">
            <div className="counter__details">
                <div className="counter__block">
                    <h1 style={{color:"#fff"}}>
                        Counter <span style={{color:"#E8580C"}}> Block</span>
                    </h1>
                </div>
                <div className="counter__blocktext">
                        <p style={{clolor:"#fff"}}>
                            We are happy to show some of our performance statistics
                        </p>

                    </div>
                    {/*counting */}
                    <div className="counter__counting">
                    <Grid container spacing={3}>
                        <Grid item  sm={3}>
                            <div className="counting__details">
                                <div className="counting__detailsi">
                                    <CountUp
                                     start={0}
                                     end={200}
                                     duration={5}
                                     className="counting__up"
                                    />
                                    <h6 style={{color:"#fff"}}>REGISTERED STUDENTS</h6>
                                </div>
                            </div>
                        </Grid>
                        <Grid item  sm={3}>
                        <div className="counting__details">
                                <div className="counting__detailsi">
                                <CountUp
                                     start={0}
                                     end={50}
                                     duration={2}
                                     className="counting__up"
                                    />
                                    <h6 style={{color:"#fff"}}>TEACHERS</h6>
                                </div>
                            </div>
                        </Grid>
                        <Grid item  sm={3}>
                        <div className="counting__details">
                                <div className="counting__detailsi">
                                <CountUp
                                     start={0}
                                     end={1000}
                                     duration={5}
                                     className="counting__up"
                                    />
                                    <h6 style={{color:"#fff"}}>LEARNERS</h6>
                                </div>
                            </div>

                        </Grid>
                        <Grid item  sm={3}>
                        <div className="counting__details">
                                <div className="counting__detailsi">
                                <CountUp
                                     start={0}
                                     end={700}
                                     duration={5}
                                     className="counting__up"
                                    />
                                    <h6 style={{color:"#fff"}}>MONTHLY STUDENT HOURS</h6>
                                </div>
                            </div>
                        </Grid>

                    </Grid>
                        
                    </div>
                   
                    {/*counting */}

            </div>
        </div>
    )
}

export default Counter
