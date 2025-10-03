
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {Button} from "../../../components/Button.tsx";
// import photo from '../../../assets/images/Photo.webp';
import photo1 from '../../../assets/images/Photo-1.png';
import { Container } from "../../../components/Container.tsx";
import {Theme} from "../../../styles/Theme.tsx";

export const Main = () => {
    return (
        <StyledMain>
            <Container>
                <FlexWrapper align={'center'} justify={'space-between'}>
                    <MainWrapper>
                        <span>Hello,</span>
                        <h2>I'm <span>Daniella Adams</span></h2>
                        <p>I’m a Graphics Designer,Designing has become my everyday affair. masting styles,grids cant be less interesting.</p>
                        <Button primary type={'button'}>Download CV</Button>
                    </MainWrapper>
                    <PhotoWrapper>
                        <Photo src={photo1} alt=''/>
                    </PhotoWrapper>

                </FlexWrapper>
            </Container>

        </StyledMain>
    );
};

const StyledMain = styled.section`
    min-height: calc(100vh - 100px);
    padding: 100px 0;
    display: flex;
    align-items: center;
   
    ${FlexWrapper} {
        @media ${Theme.media.tablet} {
            flex-direction: column-reverse;
            gap: 50px;
        }
        
    }
    
    @media ${Theme.media.tablet} {
        padding: 125px 0;
    }

`

const MainWrapper = styled.div`
    max-width: 480px;
    width: 100%;
    text-align: left;
    
    span {
        font-family: 'Nunito Sans', sans-serif;
        font-weight: 400;
        font-size: 28px;
        color: #000;
    }
    
    p {
        font-family: 'Nunito Sans', sans-serif;
        font-weight: 400;
        font-size: 24px;
        letter-spacing: 0.06em;
        text-transform: lowercase;
        color: ${Theme.colors.formColor};
        margin: 7px 0 35px;
    }
    
    
    
    h2 {
        font-family: 'Nunito', sans-serif;
        font-weight: 700;
        font-size: 50px;
        
        span {
            font-family: 'Nunito', sans-serif;
            font-weight: 700;
            font-size: 50px;
            color: ${Theme.colors.tertiaryBg}
        }
    }
    
    @media ${Theme.media.tablet} {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        
        p {
            text-align: center;
        }
    }
    
    @media ${Theme.media.mobile} {
        h2 {
            text-align: center;
        }
    }
   
`
const PhotoWrapper = styled.div`
    position: relative;
    &::before {
        content: '';
        display: inline-block;
        width: 595px;
        height: 692px;
        clip-path: polygon(100% 0, 0% 100%, 100% 100%);
        background-color: ${Theme.colors.secondaryBg};
        position: absolute;
        left: 0;
        overflow-x: clip;
        bottom: -40px;
        z-index: -1;

        @media ${Theme.media.tablet} {
            width: 500px;
            height: 570px;
            left: 0;
            bottom: -30px;
        }
        
        @media ${Theme.media.mobile} {
            width: 300px;
            height: 376px;
        }
    }
    // @media ${Theme.media.tablet} {
    //     //aspect-ratio: 496 / 670;
    //     width: 440px;
    //     height: 500px;
    //     margin: 0 auto;
    //    
    // }
`

export const Photo = styled.img`
    width: 432px;
    height: 541px;
    object-fit: cover;
    border-radius: 20px;
    @media ${Theme.media.tablet} {
        width: 440px;
        height: 500px;
    }
    
    @media ${Theme.media.mobile} {
        width: 240px;
        height: 301px;
    }
`

