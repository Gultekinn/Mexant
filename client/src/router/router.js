import SiteRoot from "../SiteRoot/SiteRoot";
import About from "../page/Site/About/About";
import Favorite from "../page/Site/Favorite/Favorite";
import Home from "../page/Site/Home/Home";
import Pages from "../page/Site/Pages/Pages";
import Services from "../page/Site/Services/Services";
import Shoping from "../page/Site/Shoping/Shoping";
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
        },
        {
            path:"favorite",
            element:<Favorite/>
        },
        {
            path:"basket",
            element:<Shoping/>
        }
    ]
    }
]