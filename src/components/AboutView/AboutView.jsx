import React from 'react';
import "./AboutView.scss"

import Usericon from "./Usericon.jpg"


class AboutView extends React.Component {
    render(){
        return(
            <div className="AboutView">
                <div className="AboutCard">
                    <div class="HeadingWrapper">
                            <h1>
                                About me
                            </h1>
                            <p className="langSlider"> 
                                <a href="">EN</a> | <a href="">DE</a>
                            </p>
                    </div>
                    <hr/>
                    <div className="UsericonWrapper">
                        <img className="Usericon" src={Usericon}/>
                    </div>
                    <div className="font-md">
                        Hello, I am Matthias. <br/>
                        I am currently a student at the <a href="https://hhgym.de">Heinrich-Hertz-Gymnasium</a> in Berlin.
                        
                        I enjoy building small web applications
                    </div>
                    

                </div>
            </div>
        )
    }
}

export default AboutView;