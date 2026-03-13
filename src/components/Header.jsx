import "./Header.css";

export default function Header(){
    return(
        <header className="header">
            <div className="logo-section">
                <img 
                src="https://image.pngaaa.com/62/1084062-middle.png" 
                alt="Student Portal Logo"
                className="logo"
                />
                <h2 className="brand">Student Portal</h2>
            </div>
        </header>
    )
}