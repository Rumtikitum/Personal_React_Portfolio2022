import "./SidePanel.css";
import {Link} from "react-router-dom";

export const SideNav = () => {
    return(
        <ul className="wrapperNav">
            <li className="sideNav">Navigation</li>
            <li className="sideNav"><Link to="/" className="link">Home</Link></li>
            <li className="sideNav"><Link to="/about" className="link">About</Link></li>
            <li className="sideNav"><Link to="/work" className="link">Work</Link></li>
            <li className="sideNav"><Link to="/resume" className="link">Resume</Link></li>

        </ul>
    )
}