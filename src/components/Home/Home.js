import "./Home.css"
import Myself from "./self.jpg"

export const Home = () => {
    return(
        <div className="wall">
            <div className="string">
                <img src={Myself} className="self" alt="self"/>

                <p className="hello">Hello,</p>
                <p className="animate-this-element">I'm RICHIE</p>
                <p className="animatedescr">Developer, Programmer, Designer</p>                
            </div>
        </div>
    )
}