import React, { useState } from 'react'
import Footer from '../../../components/footer/Footer'
import DesktopHeader from '../../../components/header/DesktopHeader'
import HeaderMobile from '../../../components/header/MobileHeader'
import HowToPayCard from '../../../components/howtopay/HowToPayCard'
import useCheckIsMobile from '../../../Hooks/MobileHook/UseCheckIsMobile'

function HowToPay() {
    //check mobile
const isMobile = useCheckIsMobile()

//add clickable buttons
const [toggleMenu, setToggleMenu] = useState(true);
    return (
        <div className="howtopay">
            <div>
            {
                    isMobile?<HeaderMobile  toggleMenu={toggleMenu}  setToggleMenu={setToggleMenu} />:
                    <DesktopHeader/>
                }
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
