import React, { useState } from 'react'
import AboutusCard from '../../../components/aboutus/AboutusCard'
import Footer from '../../../components/footer/Footer'
import DesktopHeader from '../../../components/header/DesktopHeader'
import HeaderMobile from '../../../components/header/MobileHeader'
import useCheckIsMobile from '../../../Hooks/MobileHook/UseCheckIsMobile'

function AboutUs() {
    //check mobile
const isMobile = useCheckIsMobile()

//add clickable buttons
const [toggleMenu, setToggleMenu] = useState(true);
    return (
        <div className="aboutus">
            <div>
            {
                    isMobile?<HeaderMobile  toggleMenu={toggleMenu}  setToggleMenu={setToggleMenu} />:
                    <DesktopHeader   color/>
                }
            </div>
            <div>
                <AboutusCard/>
            </div>

            <div>

                <Footer/>
            </div>
            
        </div>
    )
}

export default AboutUs
