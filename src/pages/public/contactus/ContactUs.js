import React, { useState } from 'react'
import ContactusForm from '../../../components/contactus/ContactusForm'
import Footer from '../../../components/footer/Footer'
import DesktopHeader from '../../../components/header/DesktopHeader'
import HeaderMobile from '../../../components/header/MobileHeader'
import useCheckIsMobile from '../../../Hooks/MobileHook/UseCheckIsMobile'

function ContactUs() {
       //check mobile
const isMobile = useCheckIsMobile()

//add clickable buttons
const [toggleMenu, setToggleMenu] = useState(true);
 
    return (
        <div>
            <div>
            {
                    isMobile?<HeaderMobile  toggleMenu={toggleMenu}  setToggleMenu={setToggleMenu} />:
                    <DesktopHeader color />
                }
            </div>
            <div>
                <ContactusForm/>
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    )
}

export default ContactUs
