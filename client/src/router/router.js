import SiteRoot from "../SiteRoot/SiteRoot";
import About from "../page/Site/About/About";
import Home from "../page/Site/Home/Home";
import Pages from "../page/Site/Pages/Pages";
import Services from "../page/Site/Services/Services";
import Testimonials from "../page/Site/Testimonials/Testimonials";

export const  ROUTES=[
    {
    path:"/",
    element:<SiteRoot/>,
    children:[
        {
            path:"",
            element:<Home/>
        },
        {
            path:"about",
            element:<About/>
        },
        {
            path:"services",
            element:<Services/>
        },
        {
            path:"pages",
            element:<Pages/>
        },
        {
            path:"testimonials",
            element:<Testimonials/>
        }
    ]
    }
]