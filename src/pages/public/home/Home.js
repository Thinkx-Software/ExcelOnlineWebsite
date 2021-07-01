import React from 'react'
import Banner from '../../../components/banner/Banner'
import HomeCard from '../../../components/card/HomeCard'
import Counter from '../../../components/counter/Counter'
import Footer from '../../../components/footer/Footer'
import DesktopHeader from '../../../components/header/DesktopHeader'
import Courses from '../../../components/homeCourses/Courses'
import School from '../../../components/school/School'
import Testimonial from '../../../components/testimonial/Testimonial'

function Home() {
    return (
        <div className="home">
            <div>
                <DesktopHeader/>
            </div>
            <div>
                <Banner/>
            </div>
            <div>
                <HomeCard/>
            </div>
            <div>
                <Courses/>
            </div>
            <div>
                <Testimonial/>
            </div>
            <div>
                <Counter/>
            </div>
            <div>
                <Footer/>
            </div>

        </div>
    )
}

export default Home
