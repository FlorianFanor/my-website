import { useState } from "react";
import { FaLinkedin, FaPauseCircle, FaPlayCircle } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import banner from "../assets/beach-banner.webp";



const Banner = () => {

    const [enableAccessibility, setEnableAccessibility] = useState(true);


    return (
        <div id="main" className="banner">
            <img src={banner} alt="" className="w-full h-screen object-cover" />
            <div className="w-full h-screen absolute top-0 left-0 bg-white/65">
                <div className="flex flex-col justify-center items-center h-full">
                    <h1 className="text-4xl md:text-6xl font-bold text-center text-gray-800">I'm Florian Fanor</h1>
                    <p className={`${enableAccessibility ? 'sr-only' : 'text-lg md:text-2xl text-gray-800 text-center'}`}>I'm a web developer, coder, and an accessibility expert</p>
                    <div className="flex flex-col items-center" aria-hidden="true">
                        {enableAccessibility && <p className="text-lg md:text-2xl text-gray-800" aria-hidden="true">I'm {' '}
                            <TypeAnimation
                                sequence={[
                                    'a web developer',
                                    1000,
                                    'a coder',
                                    1000,
                                    'an accessibilty expert',
                                    1000,
                                ]}
                                wrapper="span"
                                speed={50}
                                style={{ fontSize: '1em', display: 'inline-block' }}
                                repeat={Infinity}
                            />
                        </p>
                        }
                        
                        <button onClick={() => setEnableAccessibility((enableAccess) => !enableAccess)} title="Press to pause animation" >
                            {enableAccessibility ? <FaPauseCircle size="20"  /> : <FaPlayCircle size="20" title="Press to play animation" />}
                        </button>     
                    </div>
                    <a href="https://www.linkedin.com/in/florian-fanor-704a18132" target="_blank" aria-label="LinkedIn - new page" >
                        <FaLinkedin size="30" className="text-gray-800 m-4" />
                    </a>
                </div>
            </div>
        </div>
    );
}
export default Banner;