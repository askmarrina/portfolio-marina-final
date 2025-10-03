import logo from '../assets/images/Damadams.svg'
import {animateScroll as scroll} from "react-scroll";

export const Logo = () => {
    return (
        <a onClick={() =>{scroll.scrollToTop()}}>
            <img src={logo} alt=""/>
        </a>
    );
};

