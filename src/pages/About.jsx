import { Helmet } from "react-helmet-async"
export function About(){
    return(
        <div className="doc-main">
            <Helmet>
                <title>About - WolexChange</title>
            </Helmet>
            <p>About Us</p>
        </div>
    )
}