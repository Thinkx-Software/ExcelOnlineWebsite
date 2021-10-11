import React,{useEffect, useState} from 'react'
import "./DesktopHeader.css";
import MenuIcon from '@material-ui/icons/Menu';
import {Link} from "react-router-dom";
import "./DesktopHeader.css"


function DesktopHeader({color}) {
    const [showBackGroundColor , setShowBackGroundColor] = useState(false)


    //window listener
    //color
    const [colorLink, setLinkColor] = useState("grey")
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 70) {
                setShowBackGroundColor(true)
                setLinkColor("#fff")

            }
            else {
                setShowBackGroundColor(false)
                setLinkColor("grey")
            }
        })
        return ()=> window.removeEventListener('scroll', ()=>{})
        
    }, [showBackGroundColor])
    //window listener

    //bg
    return (
        <div className={`desktopheader  ${showBackGroundColor&&'desktop__black'}`} style={{
            backgroundColor:color?"#fff":null
        }}>
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
                         src="assets/dark_logo.png"
                        />
                    </div>
                </div>
                <div className="desktopheader__detailsMiddle">
                    <Link to="/" 
                    style={{
                        color:color?colorLink:null,
                        marginBottom:"130px"
                    }}
                    >HOME</Link>
                    <Link to="/aboutus"
                    style={{
                        color:color?colorLink:null
                    }}
                    >ABOUT US</Link>
                    <Link to="/howtopay"
                     style={{
                        color:color?colorLink:null
                    }}
                    >HOW TO PAY </Link>
                    <Link to="/contactus"
                    style={{
                        color:color?colorLink:null
                    }}
                    >CONTACT US</Link>
                </div>
                <div className="desktopheader__detailsRight">
                    <Link to={{pathname: "http://excelonlineschool.ac.ug/excel/login/index.php" }} target="_blank"
                    style={{
                        color:color?colorLink:null
                    }}
                    >
                       LOG IN
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default DesktopHeader
