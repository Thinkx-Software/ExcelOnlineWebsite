import React from "react";
import {BrowserRouter as Router , Redirect, Route , Switch} from "react-router-dom"
import NotFound from "./pages/general/NotFound";
import Home from "./pages/public/home/Home";
import PublicRoutes from "./pages/public/public";
import PagesRenderer from "./pagesRenderer/pages";



const Navigation = ()=>{
    return (
        <Router>
            <Switch>
           <PublicRoutes path="/excel/:page" exact>
               <PagesRenderer/>
           </PublicRoutes>
           {/*redirect to home */}
           <Route path="/excel" exact>
                <Home/>
            </Route>
            <Route
             path="/"
             exact
             render={
                 ()=><Redirect to={{pathname:"/excel"}}/>
             }
            />
            {/*redirect to home */}
            <Route path="*">
                <NotFound/>
            </Route>
            </Switch>

        </Router>

    )
}

export default Navigation;