import React ,{useState}from 'react'
import Banner from '../../../components/banner/Banner'
import HomeCard from '../../../components/card/HomeCard'
import Counter from '../../../components/counter/Counter'
import Footer from '../../../components/footer/Footer'
import DesktopHeader from '../../../components/header/DesktopHeader'
import HeaderMobile from '../../../components/header/MobileHeader'
import Courses from '../../../components/homeCourses/Courses'
import Testimonial from '../../../components/testimonial/Testimonial'
import useCheckIsMobile from '../../../Hooks/MobileHook/UseCheckIsMobile'

function Home() {
//check mobile
const isMobile = useCheckIsMobile()

    //add clickable buttons
    const [toggleMenu, setToggleMenu] = useState(true);
    return (
        <div className="home">
            <div>
                {
                    isMobile?<HeaderMobile  toggleMenu={toggleMenu}  setToggleMenu={setToggleMenu} />:
                    <DesktopHeader/>
                }
                
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
