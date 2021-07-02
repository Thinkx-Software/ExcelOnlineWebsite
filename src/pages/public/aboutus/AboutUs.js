import React from 'react'
import AboutusCard from '../../../components/aboutus/AboutusCard'
import Footer from '../../../components/footer/Footer'
import DesktopHeader from '../../../components/header/DesktopHeader'

function AboutUs() {
    return (
        <div className="aboutus">
            <div>
                <DesktopHeader/>
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
