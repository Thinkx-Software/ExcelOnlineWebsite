
import { useParams } from "react-router-dom";
import NotFound from "../pages/general/NotFound";


//create an array of all pages
const Search = ()=><div>search</div>

const pages = [
    
    {
        url:"search",
        Component:Search
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