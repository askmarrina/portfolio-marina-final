
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import photo from '../../../assets/images/Photo.webp';
import {Button} from "../../../components/Button.tsx";
import {Container} from "../../../components/Container.tsx";
import {Theme} from "../../../styles/Theme.tsx";
import {ProgressBarContainer} from "../../../components/progressBar/ProgressBarContainer.tsx";

export const About = () => {
    return (
        <StyledAbout>
            <Container>
                <FlexWrapper align={'center'} justify={'space-around'} wrap={'wrap'} gap={'50px'}>
                    <PhotoWrapper>
                        <PhotoAbout src={photo}/>
                    </PhotoWrapper>

                    <AboutWrapper>
                        <h2>I am a creative Graphic & UI Designer</h2>
                        <p>I’m a Graphics Designer,Designing has become my everyday affair. masting styles,grids cant be less interesting,Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        <ButtonWrapper>
                            <a href=''><Button primary>Download CV</Button></a>
                            <a href=''><Button secondary>View Portfolio</Button></a>
                        </ButtonWrapper>

                        <ProgressBarContainer>

                        </ProgressBarContainer>
                    </AboutWrapper>
                </FlexWrapper>
            </Container>
        </StyledAbout>
    );
};

const StyledAbout = styled.section`
   margin-bottom: 215px;
    
`

const PhotoWrapper = styled.div`
    position: relative;
    z-index: 0;
    &::before {
        content: '';
        display: inline-block;
        width: 388px;
        height: 432px;
        background-color: ${Theme.colors.linkColor};
        clip-path: polygon(100% 0, 0% 100%, 100% 100%);
        //clip-path: polygon("M 92% 0 Q 100% 0 100% 8% L 8% 100% Q 0 100% 0 92% L 100% 92% Q 100% 100% 92% 100% Z");
        position: absolute;
        top: 70px;
        left: 15px;
        z-index: -1;
        
        @media ${Theme.media.mobile} {
            width: 300px;
            height: 335px;
            left: 0;
            top: 50px;
        }
    }
`

const AboutWrapper = styled.div`
    max-width: 600px;
    width: 100%;
    h2 {
        font-family: 'Nunito', sans-serif;
        font-weight: 700; 
        font-size: 48px;
        text-transform: capitalize;
        color: ${Theme.colors.font};
    }
    
    p {
        font-family: 'Nunito Sans', sans-serif;
        font-weight: 400;
        font-size: 24px;
        letter-spacing: 0.06em;
        text-transform: lowercase;
        color: ${Theme.colors.font};
        margin: 15px 0 50px;
    }
`

const ButtonWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 40px;
    margin-bottom: 65px;
    
    @media ${Theme.media.mobile} {
        flex-direction: column;
        flex-wrap: wrap;
    }
`

const PhotoAbout = styled.img`
    width: 361px;
    height: 452px;
    object-fit: cover;

    @media ${Theme.media.mobile} {
        width: 280px;
        height: 350px;
    }
`




