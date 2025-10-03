
import styled from 'styled-components';
import {Theme} from "../styles/Theme.tsx";
import {Link} from "react-scroll";

// const items = ['Home', 'About', 'Latest Works', 'Testimonials', 'Contact'];

const items = [
    {
        title: 'Home',
        href: 'home'
    },
    {
        title: 'About',
        href: 'about'
    },
    {
        title: 'Latest Works',
        href: 'latest-works'
    },
    {
        title: 'Testimonials',
        href: 'testimony'
    },
    {
        title: 'Contact',
        href: 'contact'
    }
]

export const Menu = () => {
    return (
        <StyledMenu>
            <ul>
                {items.map((item, index) => {
                    return (
                        <MenuItem key={index}>
                            <NavLink to={item.href}
                                     smooth={true}
                            >
                                {item.title}
                            </NavLink>
                        </MenuItem>
                    );
                })}
            </ul>
        </StyledMenu>
    );
                {/*<li><Link>Home</Link></li>*/}
                {/*<li><Link>About</Link></li>*/}
                {/*<li><Link>Latest Works</Link></li>*/}
                {/*<li><Link>Testimonials</Link></li>*/}
                {/*<li><Link href={'contacts'}>Contact</Link></li>*/}

};

const StyledMenu = styled.nav`
    ul {
        display: flex;
        gap: 30px;
    }
    
    @media screen and (max-width: 1000px) {
        
            font-size: 18px;
        
    }

    @media ${Theme.media.tablet} {
        display: none;
    }
    
    
`

const MenuItem = styled.li`

`

export const NavLink = styled(Link)`
    font-family: 'Nunito Sans', sans-serif;
    font-weight: 400;
    font-size: 24px;
    position: relative;
    padding: 10px;
    z-index: 0;
    &:hover {
        &::before {
            height: 6px;
            width: 25px;
        }
    }
    
    &::before {
        content: '';
        display: inline-block;
        background-color: ${Theme.colors.linkColor};
        position: absolute;
        bottom: 5px;
        
        left: 5px;
        right: 0;
        z-index: -1;
    }
`