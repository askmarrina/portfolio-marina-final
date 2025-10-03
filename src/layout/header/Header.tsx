
import styled from 'styled-components';
import {Logo} from "../../components/Logo.tsx";
import {Menu} from "../../components/Menu.tsx";
import {Theme} from "../../styles/Theme.tsx";
import {Container} from "../../components/Container.tsx";
import {FlexWrapper} from "../../components/FlexWrapper.tsx";
import {MobileMenu} from "./mobileMenu/MobileMenu.tsx";


export const Header = () => {
    return (
        <StyledHeader>
            <Heading>Front-end Developer</Heading>
            <Container>
                <FlexWrapper justify="space-between" align="center">
                    <Logo/>
                    <Menu/>
                    <MobileMenu/>
                </FlexWrapper>

            </Container>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
    background-color: ${Theme.colors.tertiaryBg};
    
    display: flex;
    justify-content: space-between;
    padding: 30px;
    
    
    @media ${Theme.media.tablet} {
        width: 100%;
    }

    @media ${Theme.media.mobile} {
        width: 100%;
    }
`

const Heading = styled.h1`
    display: none;
`