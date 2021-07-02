import React from 'react'
import Footer from '../../../components/footer/Footer'
import DesktopHeader from '../../../components/header/DesktopHeader'
import HowToPayCard from '../../../components/howtopay/HowToPayCard'

function HowToPay() {
    return (
        <div className="howtopay">
            <div>
                <DesktopHeader/>
            </div>
            <div>
                <HowToPayCard/>
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    )
}

export default HowToPay
