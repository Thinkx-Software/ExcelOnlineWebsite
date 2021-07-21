import { Button, Grid } from '@material-ui/core'
import React from 'react'
import "./Courses.css";
import SearchIcon from '@material-ui/icons/Search';
import { Link } from "react-router-dom"
function Courses() {
    return (
        <div className="homeCourse__area">
            <div className="homeCourse__course">
                <h1>Courses</h1>
                <div className="homecourse__words">
                    <p>
                        Check out courses and select which course suits your career needs
                    </p>
                </div>

                {/*courses card */}
                <div className="homecourse__card">
                    <Grid container spacing={2}>
                        <Grid item sm={12} md={2}>
                            <div className="homecourse__first">
                                <Link>
                                    <h6>All</h6>
                                </Link>
                            </div>
                        </Grid>
                        <Grid item sm={12} md={2}>
                            <div className="homecourse__second">
                                <Link>
                                    <h6>Mathematics</h6>
                                </Link>
                            </div>
                        </Grid>
                        <Grid item sm={12} md={2}>
                            <div className="homecourse__third">
                                <Link>
                                    <h6>Biology</h6>
                                </Link>
                            </div>
                        </Grid>
                        <Grid item sm={12} md={2}>
                            <div className="homecourse__four">
                                <Link>
                                    <h6>Chemistry</h6>
                                </Link>
                            </div>
                        </Grid>
                        <Grid item sm={12} md={2}>
                            <div className="homecourse__fifth">
                                <Link>
                                    <h6>Physics</h6>
                                </Link>
                            </div>
                        </Grid>
                        <Grid item sm={12} md={2}>
                            <div className="homecourse__sixth">
                                <Link>
                                    <h6>English</h6>
                                </Link>
                            </div>
                        </Grid>

                    </Grid>


                </div>

                {/*courses card */}


                {/*arrows  left out*/}
                {/*arrows left out*/}

                {/*select left out now*/}
                {/*select left out now*/}

                {/*images course*/}
                <div className="homecoursecard__images">
                    <Grid container spacing={3}>
                        <Grid item sm={12} md={3}>
                            <div className="images__course1"
                                style={{
                                    backgroundSize: "cover",
                                    backgroundImage: `url(https://images.pexels.com/photos/4145146/pexels-photo-4145146.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500)`,
                                    height: "50vh",
                                    width: "100%",
                                    borderRadius: "10px"
                                }}
                            >
                                {/*images words */}
                                {/*images words */}
                                <div className="images__wordSection">
                                    <h4 style={{ color: "#fff" }}>
                                        zoology notes complete
                                    </h4>
                                    <div className="images__button">
                                        <Button style={{ color: "#fff", backgroundColor: "#E8580C" }} variant="contained">View More</Button>
                                    </div>

                                </div>


                                {/*images word */}

                            </div>

                        </Grid>
                        <Grid item sm={12}md={3}>
                            <div className="images__course1"
                                style={{
                                    backgroundSize: "cover",
                                    backgroundImage: `url(https://images.pexels.com/photos/4144182/pexels-photo-4144182.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500)`,
                                    height: "50vh",
                                    width: "100%",
                                    borderRadius: "10px"
                                }}
                            >
                                {/*images words */}
                                {/*images words */}
                                <div className="images__wordSection">
                                    <h4 style={{ color: "#fff" }}>
                                        Refraction notes for all
                                    </h4>
                                    <div className="images__button">
                                        <Button style={{ color: "#fff", backgroundColor: "#E8580C" }} variant="contained">View More</Button>
                                    </div>

                                </div>

                                {/*images word */}

                            </div>
                        </Grid>
                        <Grid item sm={12} md={3}>
                            <div className="images__course1"
                                style={{
                                    backgroundSize: "cover",
                                    backgroundImage: `url(https://images.pexels.com/photos/4144095/pexels-photo-4144095.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500)`,
                                    height: "50vh",
                                    width: "100%",
                                    borderRadius: "10px"
                                }}
                            >
                                {/*images words */}
                                {/*images words */}
                                <div className="images__wordSection">
                                    <h4 style={{ color: "#fff" }}>
                                    light notes advanced
                                    </h4>
                                    <div className="images__button">
                                        <Button style={{ color: "#fff", backgroundColor: "#E8580C" }} variant="contained">View More</Button>
                                    </div>

                                </div>

                                {/*images word */}

                            </div>
                        </Grid>
                        <Grid item sm={12} md={3}>
                            <div className="images__course1"
                                style={{
                                    backgroundSize: "cover",
                                    backgroundImage: `url(https://images.pexels.com/photos/4144449/pexels-photo-4144449.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500)`,
                                    height: "50vh",
                                    width: "100%",
                                    borderRadius: "10px"
                                }}
                            >
                                {/*images words */}
                                {/*images words */}
                                <div className="images__wordSection">
                                    <h4 style={{ color: "#fff" }}>
                                        Modern Physics advanced
                                    </h4>
                                    <div className="images__button">
                                        <Button style={{ color: "#fff", backgroundColor: "#E8580C" }} variant="contained">View More</Button>
                                    </div>

                                </div>

                                {/*images word */}

                            </div>
                        </Grid>

                    </Grid>

                </div>

                {/*images course */}

                {/*images course2 */}
                <div className="homecoursecard__images">
                    <Grid container spacing={3}>
                        <Grid item sm={12} md={3}>
                            <div className="images__course1"
                                style={{
                                    backgroundSize: "cover",
                                    backgroundImage: `url(https://images.pexels.com/photos/4145070/pexels-photo-4145070.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500)`,
                                    height: "50vh",
                                    width: "100%",
                                    borderRadius: "10px",
                                    cursor: "pointer"
                                }}
                                onMouseEnter={() => { }}
                                onMouseLeave={() => { }}
                            >
                                {/*images words */}
                                <div className="images__wordSection">
                                    <h4 style={{ color: "#fff" }}>
                                        Set Theory notes for all
                                    </h4>
                                    <div className="images__button">
                                        <Button style={{ color: "#fff", backgroundColor: "#E8580C" }} variant="contained">View More</Button>
                                    </div>

                                </div>



                                {/*images word */}

                            </div>
                        </Grid>
                        <Grid item sm={12} md={3}>
                            <div className="images__course1"
                                style={{
                                    backgroundSize: "cover",
                                    backgroundImage: `url(https://media.istockphoto.com/photos/facing-my-future-with-confidence-picture-id1139495117?k=6&m=1139495117&s=612x612&w=0&h=a2hxTvHq7XNN0zMh8m1CuyDPIaNYiswD7iZbh5rpac4=)`,
                                    height: "50vh",
                                    width: "100%",
                                    borderRadius: "10px"
                                }}
                            >
                                {/*images words */}
                                {/*images words */}
                                <div className="images__wordSection">
                                    <h4 style={{ color: "#fff" }}>
                                        Matrices notes for all classes 
                                    </h4>
                                    <div className="images__button">
                                        <Button style={{ color: "#fff", backgroundColor: "#E8580C" }} variant="contained">View More</Button>
                                    </div>

                                </div>



                                {/*images word */}

                                {/*images word */}

                            </div>

                        </Grid>
                        <Grid item sm={12} md={3}>
                            <div className="images__course1"
                                style={{
                                    backgroundSize: "cover",
                                    backgroundImage: `url(https://images.pexels.com/photos/4145070/pexels-photo-4145070.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500)`,
                                    height: "50vh",
                                    width: "100%",
                                    borderRadius: "10px"
                                }}
                            >
                                {/*images words */}
                                {/*images words */}
                                <div className="images__wordSection">
                                    <h4 style={{ color: "#fff" }}>
                                        Waves notes completed 
                                    </h4>
                                    <div className="images__button">
                                        <Button style={{ color: "#fff", backgroundColor: "#E8580C" }} variant="contained">View More</Button>
                                    </div>

                                </div>



                                {/*images word */}

                                {/*images word */}

                            </div>
                        </Grid>
                        <Grid item sm={12} md={3}>
                            <div className="images__course1"
                                style={{
                                    backgroundSize: "cover",
                                    backgroundImage: `url(https://images.pexels.com/photos/4145070/pexels-photo-4145070.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500)`,
                                    height: "50vh",
                                    width: "100%",
                                    borderRadius: "10px"
                                }}
                            >
                                {/*images words */}
                                {/*images words */}
                                <div className="images__wordSection">
                                    <h4 style={{ color: "#fff" }}>
                                        Plants and Animals free
                                    </h4>
                                    <div className="images__button">
                                        <Button style={{ color: "#fff", backgroundColor: "#E8580C" }} variant="contained">View More</Button>
                                    </div>

                                </div>



                                {/*images word */}

                                {/*images word */}

                            </div>
                        </Grid>

                    </Grid>

                </div>
                {/*images course2 */}

                {/*course categories */}

                <h1 className="course__categories">Course  <span style={{ color: "#E8580C" }}> Categories</span></h1>
                <div className="homecourse__words">
                    <p>
                        Our courses have been developed to cover categories that helpmn you combine the course  units which meets your specific career needs
                    </p>
                </div>
                {/*course categories */}

                {/*course categories area */}
                <div className="homecourse__categories">
                    <Grid container spacing={3}>
                        <Grid item sm={12} md={4}>
                            <div className="categories__first">
                                <div className="categoriesfirstImage">
                                    <img
                                        loading="lazy"
                                        alt="not found"
                                        src="https://images.pexels.com/photos/3825434/pexels-photo-3825434.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                                    />
                                </div>

                                <div className="categories__details">
                                    <h5>Biology</h5>
                                </div>
                                <div className="categories__detailsP">
                                    <p>
                                        The Biology curriculum that covers entire A level content
                                    </p>
                                </div>
                                <div className="categories__button">
                                    <Button 
                                    style={{
                                        backgroundColor:"#E8580C",
                                        color:"#fff"
                                    }}
                                     variant="contained" fullWidth> Read More</Button>
                                </div>

                            </div>

                        </Grid>
                        <Grid item sm={12} md={4}>
                            <div className="categories__first">
                                <div className="categoriesfirstImage">
                                    <img
                                        loading="lazy"
                                        alt="not found"
                                        src="https://images.pexels.com/photos/714699/pexels-photo-714699.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                                    />
                                </div>
                                <div className="categories__details">
                                    <h5>Physics</h5>
                                </div>
                                <div className="categories__detailsP">
                                    <p>
                                        The Physics curriculum that covers entire A level content
                                    </p>
                                </div>

                                <div className="categories__button">
                                    <Button style={{
                                        backgroundColor:"#E8580C",
                                        color:"#fff"
                                    }} variant="contained" fullWidth>Read More</Button>
                                </div>

                            </div>
                        </Grid>
                        <Grid item sm={12} md={4}>
                            <div className="categories__first">
                                <div className="categoriesfirstImage">
                                    <img
                                        loading="lazy"
                                        alt="not found"
                                        src="https://images.pexels.com/photos/3729557/pexels-photo-3729557.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                                    />
                                </div>
                                <div className="categories__details">
                                    <h5>Mathematics</h5>
                                </div>
                                <div className="categories__detailsP">
                                    <p>
                                        The Biology curriculum that covers entire A level content
                                    </p>
                                </div>
                                <div className="categories__button">
                                    <Button style={{
                                        backgroundColor:"#E8580C",
                                        color:"#fff"
                                    }} variant="contained" fullWidth>Read More</Button>
                                </div>

                            </div>
                        </Grid>

                    </Grid>

                </div>
                {/*course categories a */}

                {/* search courses*/}
                <h1 className="course__categories">Search <span style={{ color: "#E8580C" }}> Courses</span></h1>
                <div className="homecourse__words">
                    <p>
                        You can search the specific course of interest by its name
                    </p>
                </div>
                {/*search area */}
                <div className="homecourse__searchArea">

                    <input
                        type="text"
                    />
                    <SearchIcon fontSize="large" className="homecourse__search" />
                </div>
                {/*search area */}
                {/*search courses */}

                {/*site announcements */}
                <h1>Site <span style={{ color: "#E8580C" }}> Announcements</span></h1>
                <div className="homecourse__words">
                    <p>
                        The need for online studies is urgent to provide learning to the large population of the youths especially in developing countries.
                        We are committed to fulfilling our promise to offer quality learning experience to your students
                    </p>
                </div>
                <div>
                    No Announcements yet
                </div>

                {/*site announcements */}

            </div>


        </div>
    )
}

export default Courses
//http://excelonlineschool.ac.ug/app/webservice/rest/server.php?wstoken=23ae202137b89be87c8a04031f23eef4&wsfunction=core_course_get_courses&moodlewsrestformat=json