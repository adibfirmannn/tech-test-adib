import Navbar from "../components/layouts/Navbar"
import AboutUs from "../components/main/AboutUs"
import Menu from "../components/main/Menu"
import ContactUs from "../components/main/ContactUs"
import Footer from "../components/layouts/Footer"

export default function Dashboard(){
    return(
        <div className="mx-20">
            <Navbar/>
            <AboutUs/>
            <Menu/>
            <ContactUs/>
            <Footer/>
        </div>
    )
}