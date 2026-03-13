import Header from "./Header"
import Nav from "./Nav"
import "./Page.css"

export default function About(){
    return(
        <div>

            <section className="page">

                <h1>About the Portal</h1>

                <p>
                This portal is designed to simplify student information management
                through a fast, minimal, and searchable interface.
                </p>

                <h2>Features</h2>

                <p>
                • Switch between grid and table views  
                • Search student profiles instantly  
                • Organized academic and contact data  
                • Clean responsive interface
                </p>

                <h2>Purpose</h2>

                <p>
                The goal is to make student information easy to access for
                administrators, faculty, and institutional staff.
                </p>

            </section>

        </div>
    )
}