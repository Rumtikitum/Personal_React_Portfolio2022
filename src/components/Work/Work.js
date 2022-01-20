import "./Work.css"
import Picture from "./work1.jpg"
import Fullystock from "./fullystocked.JPG"
import Retired from "./retired.jpg"

export const Work = () => {

    return(
        <div className="workwall">
            <h1 className="worktitle">Just a Sample...</h1>
            <div className="workbox">
                <div className="tier1">
                    <div className="sample leftbox">
                    <a href="https://rumtikitum.github.io/Kim_portfolio/">
                        <img src={Picture} className="pic" alt="1"/>
                    </a>
                        <div className="desc">
                            <ul>
                                <li>React</li>
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>JavaScript</li>
                                <li>Responsive Design</li>
                            </ul>
                        </div>
                    </div>
                    <div className="sample rightbox">
                        <div className="desc">
                            <ul>
                                <li>NodeJS</li>
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>EJS</li>
                                <li>Responsive Design</li>
                            </ul>
                        </div>
                        <a href="https://infinite-island-02975.herokuapp.com/">
                            <img src={Fullystock} className="pic" alt="2"/>                        
                        </a>
                    </div>
                </div>
                <div className="tier2">
                    <div className="sample leftbox">
                        <a href="https://mighty-meadow-12463.herokuapp.com/"><img src={Retired} className="pic" alt="3"/></a>
                        <div className="desc">
                            <ul>
                                <li>Former (retired) Portfolio</li>
                                <li>Creative Designs</li>
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>NodeJS</li>
                            </ul>
                        </div>
                    </div>
                    <div className="sample rightbox">
                        <div className="desc">
                            <ul>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                            </ul>
                        </div>
                        <img src={Picture} className="pic" alt="4"/>
                    </div>
                </div>

            </div>
        </div>
    )
}