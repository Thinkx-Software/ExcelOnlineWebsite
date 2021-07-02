import React from 'react'
import ContactusForm from '../../../components/contactus/ContactusForm'
import Footer from '../../../components/footer/Footer'
import DesktopHeader from '../../../components/header/DesktopHeader'

function ContactUs() {
    return (
        <div>
            <div>
                <DesktopHeader/>
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
