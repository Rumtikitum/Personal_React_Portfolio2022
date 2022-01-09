import {Link} from "react-router-dom"

export const SideNav = () => {
    return(
        <div>
            <header>Navigation</header>
            <ul>
                <Link to="/about">About</Link>
                <Link to="/">Work</Link>
            </ul>


        </div>
    )
}