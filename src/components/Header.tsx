import { useNavigate } from "react-router-dom"

export default function Header() {
 const navigate = useNavigate()
    return (
        <header>
            <div className="headerLeftContainer">
            <h1 onClick={() => navigate('/')}>REACTOR</h1>
            </div>
            <div className="headerRightContainer">
                <button className="headerButton" onClick={() => navigate("/signup")}>Sign Up</button>
                <button className="headerButton" onClick={() => navigate("/login")}>Login</button>
            </div>
        </header>
    )
}