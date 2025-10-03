
import styled, {css} from 'styled-components';
import {Theme} from "../../../styles/Theme.tsx";
import {useState} from "react";




export const MobileMenu = () => {
    const [menuIsOpen, setmenuIsOpen] = useState(false)
    const onBurgerBtnClick = () => {setmenuIsOpen(!menuIsOpen)}
    return (
        <StyledMobileMenu>
            <BurgerButton isOpen={menuIsOpen} onClick={onBurgerBtnClick}>
                <span></span>
            </BurgerButton>
            <MobileMenuPopup isOpen={menuIsOpen} onClick={ () => {setmenuIsOpen(false) }}>
                <ul>
                    <li><Link>Home</Link></li>
                    <li><Link>About</Link></li>
                    <li><Link>Latest Works</Link></li>
                    <li><Link>Testimonials</Link></li>
                    <li><Link>Contact</Link></li>
                </ul>
            </MobileMenuPopup>

        </StyledMobileMenu>
    );
}

const StyledMobileMenu = styled.nav`
    display: none;
    
    @media ${Theme.media.tablet} {
        display: block;
    }
`

const BurgerButton = styled.button<{isOpen: boolean}>`
    position: fixed;
    top: 45px;
    right: 20px;
    z-index: 9999999;
    
    
    span {
        display: block;
        width: 35px;
        height: 2px;
        background-color: ${Theme.colors.linkColor};
        position: absolute;
        top: 0;
        left: -40px;

        ${props => props.isOpen && css<{isOpen: boolean}>`
            background-color: rgba(255, 255, 255, 0);        
        `}

        &::before {
            content: "";
            display: block;
            width: 35px;
            height: 2px;
            background-color: ${Theme.colors.linkColor};
            position: absolute;
            transform: translateY(-6px);

            ${props => props.isOpen && css<{isOpen: boolean}>`
                transform: rotate(-45deg) translateY(0);     
            `}
        }

        &::after {
            content: "";
            display: block;
            width: 35px;
            height: 2px;
            background-color: ${Theme.colors.linkColor};
            position: absolute;
            transform: translateY(6px);

            ${props => props.isOpen && css<{isOpen: boolean}>`
                transform: rotate(45deg) translateY(0);       
            `}
        }
    }
`

const MobileMenuPopup = styled.div<{isOpen: boolean}>`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 99999;
    background-color: ${Theme.colors.secondaryBg};
    
    display: none;
    
    ${props => props.isOpen && css<{isOpen: boolean}>`
        display: flex;
        justify-content: center;
        align-items: center;
        
        gap: 30px;
    `}
    ul {
        display: flex;
        gap: 30px;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        
    }

    
`

export const Link = styled.a`
    font-family: 'Nunito Sans', sans-serif;
    font-weight: 400;
    font-size: 24px;
    position: relative;
    padding: 10px;
    z-index: 0;
    color: ${Theme.colors.font};
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