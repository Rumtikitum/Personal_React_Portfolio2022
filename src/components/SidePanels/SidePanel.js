import "./SidePanel.css";
import {Link} from "react-router-dom";

export const SideNav = () => {
    return(
        <div>
            <input type="checkbox" id="check"/>
            <label htmlFor="check">
                <i className="fas fa-bars" id="btn"></i>
                <i className="fas fa-arrow-left" id="cancel"></i>
            </label>
            <div className="wrapperNav">
                <header className="sideNav sideTitle header">
                        <span className="vertical-center">
                            Navigation
                        </span>
                </header>
                <ul className="navlist">
                    <li className="sideNav"><Link to="/Personal_React_Portfolio2022" className="link">Home</Link></li>
                    <li className="sideNav"><Link to="/about" className="link">About</Link></li>
                    <li className="sideNav"><Link to="/work" className="link">Work</Link></li>
                    <li className="sideNav"><Link to="/contact" className="link">Contact</Link></li>
                    <li className="sideNav"><a href="https://www.linkedin.com/in/richie-tauch-13a0b9115/" className="link">LinkedIn</a></li>

                </ul>    
            </div>
        
        </div>

    )
}