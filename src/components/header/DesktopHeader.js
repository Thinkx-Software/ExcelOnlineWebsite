import React,{useEffect, useState} from 'react'
import "./DesktopHeader.css";
import MenuIcon from '@material-ui/icons/Menu';
import {Link} from "react-router-dom";
import "./DesktopHeader.css"
function DesktopHeader() {
    const [showBackGroundColor , setShowBackGroundColor] = useState(false)
    //window listener
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 70) {
                setShowBackGroundColor(true)
            }
            else {
                setShowBackGroundColor(false)
            }
        })
        return ()=> window.removeEventListener('scroll', ()=>{})
        
    }, [showBackGroundColor])
    //window listener
    return (
        <div className={`desktopheader  ${showBackGroundColor&&'desktop__black'}`}>
            <div className="desktopheader__details">
                <div className="desktopheader__detailsLeft">
                    <div className="detailsLeft__icon">
                        <MenuIcon 
                        fontSize="large" 
                        color="grey"
                        className="detialsLeft__iconMenu"
                        />
                    </div>
                    <div className="detailsLeftImage">
                        <img
                        
                         loading="lazy"
                         alt="not found"
                         classsName="detailsLeftImageLogo"
                         src="data:image/jpeg;base64,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"
                        />
                    </div>
                </div>
                <div className="desktopheader__detailsMiddle">
                    <Link to="/">HOME</Link>
                    <Link to="/excel/aboutus">ABOUT US</Link>
                    <Link to="/excel/howtopay">HOW TO PAY </Link>
                    <Link to="">SCHOOL BLOG</Link>
                    <Link to="/excel/contactus">CONTACT US</Link>
                </div>
                <div className="desktopheader__detailsRight">
                    <Link>
                       LOG IN
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default DesktopHeader
