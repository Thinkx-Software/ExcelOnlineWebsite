import React, {useEffect, useState} from "react";
import Axios from "axios";

const useFetchCourses = ()=>{
    const [courses, setCourses] = useState([])
    useEffect(()=>{
        const fetchallcourses = async ()=>{
            try{
                const {data} = await Axios.get("http://excelonlineschool.ac.ug/excel/webservice/rest/server.php?wstoken=96496dbc11f5091d7b6e2cd16bebb4ca&wsfunction=core_course_get_courses&moodlewsrestformat=json")
                //console.log(data)
                setCourses(data.map(item=>({id:item.id, courseName:item.fullname})))
   
            }
            catch(error){
               console.log(error.message)
            } 
            
        }
        fetchallcourses()
     
    }, [])
    

    return courses

}
export default useFetchCourses;