
import { useParams } from "react-router-dom";
import NotFound from "../pages/general/NotFound";
import AboutUs from "../pages/public/aboutus/AboutUs";
import ContactUs from "../pages/public/contactus/ContactUs";
import HowToPay from "../pages/public/howtopay/HowToPay";


//create an array of all pages
const Search = ()=><div>search</div>

const pages = [
    
    {
        url:"search",
        Component:Search
    },
    {
        url:"aboutus",
        Component:AboutUs
    },
    {
        url:"howtopay",
        Component:HowToPay
    },
    {
        url:"contactus",
        Component:ContactUs
    }

]

const PagesRenderer = () => {
    const { page } = useParams();
    
    console.log(`The params is ${page}`)
    if (page) {
        const FoundPage = pages.find(renderPage => renderPage.url === `${page}`)
        if (FoundPage) {
            const { Component } = FoundPage
        
            return <Component/>
            
        }
        else {
            return <NotFound/>
        }

    }
    else {
        return (
            <div> </div>

        )
    }
    
    
}
export default PagesRenderer;