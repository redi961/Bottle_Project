import "../../styles/Sidebar.css"
import Logo_white from "../../image/Logo_white.png"


function Sidebar() {
    return (
        <div className="sidebar">
            <div className="Logo_zone"><img className="Logo" src={Logo_white}></img></div>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/Plotly">Graph</a></li>
                <li><a href="/ImageList">Image</a></li>
                <li id="Login"><a href="/Login">Login</a></li>
            </ul>
        </div>
    );
}

export default Sidebar;
