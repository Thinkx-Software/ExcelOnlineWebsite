import React, {useEffect, useState} from "react";
import Axios from "axios";

const useFetchCourses = ()=>{
    const [courses, setCourses] = useState([])
    useEffect(()=>{
        const fetchallcourses = async ()=>{
            try{
                const {data} = await Axios.get("http://159.89.227.255/ExcelOline/webservice/rest/server.php?wstoken=97bf37b0ec39bd4bc9c4eb82023a233e&wsfunction=core_course_get_courses&moodlewsrestformat=json")
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