import { Helmet } from "react-helmet-async"
import "../css/About.css"
export function About(){
    return(
        <div className="about-main">
            <Helmet>
                <title>About - WolexChange</title>
            </Helmet>
            <h2 className="about-head-2">About Us</h2>
            <p className="about-p">
                WolexChange is a platform dedicated to providing the best tools for individuals and organisations involved in financial 
                services, with a focus on dependability. We work hard to transform our passion in fintech into a thriving online website. 
                We hope you enjoy our services as much as we enjoy offering them to you. 
                <br />Thank you for visiting our Website.
            </p>

        </div>
    )
}