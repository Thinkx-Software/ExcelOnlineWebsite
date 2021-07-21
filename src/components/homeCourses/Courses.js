import { Button, Grid } from '@material-ui/core'
import React from 'react'
import "./Courses.css";
import SearchIcon from '@material-ui/icons/Search';
import { Link } from "react-router-dom"
import useFetchCourses from '../../Hooks/useFetchCourses';
import useCheckIsMobile from '../../Hooks/MobileHook/UseCheckIsMobile';
import Spinner from '../spinner/Spinner';
function Courses() {
          //get courses
          const allCourses = useFetchCourses()
               //check mobile
    const isMobile = useCheckIsMobile()
          //get all courses
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


                {/*small cards*/}
                <div className="homecourse__categoryfetch"
                 style={{
                     margin: "20px"
                 }}
                >

                    {
                       allCourses.length>0?
                       allCourses.map((item, index)=>(
                        <div className="homecourse__sixth" style={{width:isMobile?"80%":"25%", margin:"20px", height:"fit-content"}} key={index}>
                        <Link>
                            <h6>{item.courseName}</h6>
                        </Link>
                    </div>

                       ))
                       :<Spinner/>  
                    }
                </div>
                {/*small cards*/}

                {/*select left out now*/}
                {/*select left out now*/}

                {/*images course*/}
                <div className="homecoursecard__images">
                   
                </div>

                {/*images course */}

               
                {/*course categories */}

                <h1 className="course__categories">Course  <span style={{ color: "#E8580C" }}> Categories</span></h1>
                <div className="homecourse__words">
                    <p>
                        Our courses have been developed to cover categories that helpmn you combine the course  units which meets your specific career needs
                    </p>
                </div>
                {/*course categories */}
                 <div className="homecourse__categoryfetch" >
                     {
                         allCourses.length>0?allCourses.map((item, index)=>(
                            <div className="images__course1" 
                            style={{
                                backgroundSize: "cover",
                                backgroundImage: `url(https://images.pexels.com/photos/4145146/pexels-photo-4145146.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500)`,
                                height: "50vh",
                                width:isMobile?"90%":"20%",
                                borderRadius: "10px",
                                margin:5
                            }}
                        >
                            {/*images words */}
                            {/*images words */}
                            <div className="images__wordSection">
                                <h4 style={{ color: "#fff" }}>
                                    {item.courseName}
                                </h4>
                                <div className="images__button">
                                    <Button style={{ color: "#fff", backgroundColor: "#E8580C" }} variant="contained">View More</Button>
                                </div>
                    
                            </div>
                    
                    
                            {/*images word */}
                    
                        </div>

                         ))
                         
                         
                         :<Spinner/>
                     }

                 </div>

                 {

                 }

                {/*course categories area */}

                {/*circel images */}
                {/*circle images */}

                
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