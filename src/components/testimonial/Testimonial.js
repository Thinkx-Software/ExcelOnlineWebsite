import React from 'react'
import "./Testimonial.css";
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
function Testimonial() {
    return (
        <div className="testimonial">
            <div className="testimonial__details">
            <div className="testimonail__block">
                    <h1 style={{color:"#000"}}>
                        Student<span style={{color:"#E8580C"}}> Testimonial</span>
                    </h1>
                </div>
                <div className="testimonail__words">
                    <p>
                        Our Students are proud of there learning experience and are very happy to announce it to the world .
                        
                    </p>
                    <p>
                        See Some of there testimonials below
                    </p>
                </div>
                <div className="testimonial__person">
                    <div className="testimonial__icon">
                        <PersonOutlineOutlinedIcon fontSize="large" color="gray" className="testimonial__iconStudent"/>
                    </div>
                </div>
                {/*studente name */}
                <div className="testimonail__name">
                    <h4 style={{color:"#E8580C"}}>KATENDE NICHOLAS</h4>
                </div>
                {/*student name */}

                {/*student */}
                <div className="testimonial__student">
                    <h5 style={{color:"gray"}}>Student</h5>
                </div>
                {/*student */}
                {/*student words */}
                <div className="testimonail__words">
                    <p>
                        I have been able to pass my exams by studying with ExcelOnline.They have the best teachers and materials around town
                        
                    </p>
                    
                </div>

                {/*students words */}

            </div>
        </div>
    )
}

export default Testimonial
