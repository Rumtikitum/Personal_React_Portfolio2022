import "./Home.css"
import Myself from "./self.jpg"

export const Home = () => {
    return(
        <div className="wall">
            <div className="string">
                <img src={Myself} className="self" alt="self"/>
                <p className="hello">hello,</p>
                <p className="animate-this-element">My name is Richie</p>
                <p className="animatedescr">Developer, Programmer, Designer</p>                
            </div>
        </div>
    )
}