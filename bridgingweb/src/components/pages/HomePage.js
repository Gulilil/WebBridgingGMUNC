import React, {useState} from 'react';
import { Link } from "react-router-dom";
import mun_bg from "../../assets/mun_bg.jpg";
import gmunc_gradient from "../../assets/Logo_gradient.png";
import gmunc_dark from "../../assets/Logo_dark.png";
import gmunc_light from "../../assets/Logo_light.png";
import ITBMUN from "../../assets/ITBMUN.png";
import MUN from "../../assets/MUN.png";
import PubDisc from "../../assets/PublicDiscussion.jpg";
import JointSim from "../../assets/JointSimulation.jpg";
import "./HomePage.css";

const HomePage = () => {

    const [hidden, setHidden] = useState(true);

    return (
    <div>
        <div className='bg-image'>
            < div className = 'titlebox'>
                <div>
                    <img onClick = {() => setHidden(s => !s)} class="mun_main" src={gmunc_dark}/>
                    <h1 class="titletext"> Are you ready?</h1>
                    {!hidden ? 
                    <div display={false}>
                        <p class= "subtitletext">  Join Us ! </p>
                        <p> Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
                            Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies,
                            purus lectus malesuada libero, sit amet commodo magna eros quis urna.</p>
                        <button class = "button" >
                            Registration 
                        </button>
                    </div>
                    : null }
                </div>
            </div>
        </div>
        
        <div className ="bg-[#e2cbb1] w-screen px-10">
            <div className = "gridbox">
                <div  className = "clearfix ">
                    <img className="mun_image_left"src={MUN}/>
                    <p className='subtitletext'> About MUN and GMUNC </p>
                    <p className = "subsubtitletext"> Model United Nations (MUN) </p>
                    <p>Model United Nations, also known as Model UN or MUN, is an extra-curricular activity 
                    in which students typically roleplay delegates to the United Nations and simulate UN committees. </p>
                    <p className = "subsubtitletext"> Ganesha Model United Nations Club (GMUNC) </p>
                    <p>Established on August 14th, 2021, starting with our desire to have an experience at Harvard National MUN 2011, 
                    we make our path for being the first and only Model United Nations club on Bandung Institute of Technology. 
                    We together, have a dream to prove everyone that Engineering, Art, and Business students could also negotiate on world's issues.</p>
                </div>
                <div className = "clearfix">
                    <img className='mun_image_right' src ={ITBMUN}/>
                    <p className='subtitletextright'> GMUNC's Activities </p>

                    <p className='subsubtitletextright'> ITBMUN </p>
                    <p className="alignright"> ITB Model United Nations is the annual MUN competition held by GMUNC. 
                    ITB MUN is the biggest activity on GMUNC that convened for its first session three years ago. 
                    The first ITB MUN had 2 councils, and it grew in size in its second session growing to 4 councils. 
                    The next ITB MUN held in February 2019 developed even more, growing to 6 councils and 175 delegates,
                    with delegates coming from over 24 different institutions across Indonesia. 
                    The latest season of ITB MUN convened online last May 2021, with more than 200+ 
                    delegates coming from different institutions and countries. </p>
                </div>

                <div className = "clearfix">
                    <img className="mun_image_right"src={gmunc_gradient}/>
                    <p className='subsubtitletextright'> GMUNC Bridging </p>
                    <p className="alignright"> As the first step for a newcomer of GMUNC, they got selected through an event called GMUNC Bridging, 
                    or maybe known as PPAB in the general meaning. On GMUNC Bridging, all newcomers are getting introduced to MUN and GMUNC, 
                    after that they will get selected based on selection criteria, and lastly will be appointed as GMUNC new batch member. 
                    After bridging, there are usually funday or celebration party for congratulating GMUNC new batch members. </p>
                </div>

                <div className = "clearfix">
                    <img className="mun_image_right"src={PubDisc}/>
                    <p className='subsubtitletextright'> Public Discussion </p>
                    <p className="alignright"> World issues always coming every day and inevitably always makes us wonder and want to discuss the issue. 
                    Alongside with Strategic Studies division's work project, GMUNC has monthly public discussions where everyone could express their opinion 
                    towards the topic and enhancing their public speaking skills. The result of the discussions is also showed in infographics that are posted to GMUNC's 
                    official accounts such as Instagram, Linkedin, or LINE. </p>
                </div>

                <div className = "clearfix">
                    <img className="mun_image_right"src={JointSim}/>
                    <p className='subsubtitletextright'> Joint Simulation </p>
                    <p className="alignright"> As a Model United Nations club, GMUNC always try to stay connected with other MUN clubs from other institutions across Indonesia. 
                    One of the way to connect our ideas is through Joint Simulation activity. Joint Simulation is a mini MUN conference. We usually invite or get invited to do Joint 
                    Simulation from other institutions such as University of Indonesia, Parahyangan University, Gadjah Mada University, President University, and many more. </p>
                </div>
            </div>
        </div>
    </div>
    );
};

export default HomePage;