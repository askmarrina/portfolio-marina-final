import {Icon} from  '../../components/icon/Icon.tsx'
import styled from "styled-components";
import phone from '../../assets/images/Phone.png'
import message from '../../assets/images/Messages.png'
import location from '../../assets/images/Location-1.png'
import {FlexWrapper} from "../../components/FlexWrapper.tsx";
import {Container} from "../../components/Container.tsx";
import {Theme} from "../../styles/Theme.tsx";


export const Footer = () => {
    return (
        <StyledFooter>
            <Container>
                <FlexWrapper direction={"column"} align={'center'} gap={'30px'} wrap={'wrap'}>
                    <ContactWrapper>
                        <ContactItem>
                            <Phone>
                                <ImageWrapper>
                                    <Image src={phone}/>
                                </ImageWrapper>
                                <a href=''><span>09028793244</span></a>
                            </Phone>
                        </ContactItem>
                        <ContactItem>
                            <Email>
                                <ImageWrapper>
                                    <Image src={message}/>
                                </ImageWrapper>

                                <a href=''><span>shalewa64@gmail.com</span></a>
                            </Email>
                        </ContactItem>
                        <ContactItem>
                            <Address>
                                <ImageWrapper>
                                    <Image src={location}></Image>
                                </ImageWrapper>
                                <a href=''><span>497 Evergreen Rd. Roseville, CA 95673</span></a>
                            </Address>
                        </ContactItem>

                    </ContactWrapper>

                    <SocialList>
                        <SocialItem>
                            <SocialLink>
                                <Icon width={'24px'} height={'22px'} viewBox={'0 0 24 22'} iconId={'twitter'}/>
                            </SocialLink>
                        </SocialItem>
                        <SocialItem>
                            <SocialLink>
                                <Icon width={'24px'} height={'22px'} viewBox={'0 0 24 22'} iconId={'instagram'}/>
                            </SocialLink>
                        </SocialItem>
                        <SocialItem>
                            <SocialLink>
                                <Icon width={'24px'} height={'22px'} viewBox={'0 0 24 22'} iconId={'snapchat'}/>
                            </SocialLink>
                        </SocialItem>
                        <SocialItem>
                            <SocialLink>
                                <Icon width={'24px'} height={'22px'} viewBox={'0 0 24 22'} iconId={'facebook'}/>
                            </SocialLink>
                        </SocialItem>
                        <SocialItem>
                            <SocialLink>
                                <Icon width={'24px'} height={'22px'} viewBox={'0 0 24 22'} iconId={'youtube'}/>
                            </SocialLink>
                        </SocialItem>
                    </SocialList>
                </FlexWrapper>
            </Container>

        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
    background-color: #FB3F5C;
    min-height: 232px;
    color: white;
    
    
`

const ContactWrapper = styled.div`
    display: flex;
    align-items: center;
    padding-top: 65px;
    
    //margin-bottom: 30px;
    
    @media (max-width: 1000px) {
        flex-direction: column;
        flex-wrap: wrap;
        gap: 10px;
        justify-content: center;
        align-items: center;
    }
    
`

const ContactItem = styled.div`
    display: flex;
    align-items: center;
    
    gap: 15px;
    padding-left: 20px;
    position: relative;
    
    

    &:not(:first-child)::before {
        content: '';
        display: inline-block;
        width: 2px;
        height: 34px;
        background-color: white;
        position: absolute;
        left: 20px;
        top: 50%;
        transform: translateY(-50%);
        
        @media (max-width: 1000px) {
            display: none;
        }
    }
    
    &:first-child::before {
        display: none;
    }
    
    &:not(:first-child) {
        padding-left: 40px;
    }
    
    &:hover {
        text-decoration: underline;
    }
    
    @media ${Theme.media.tablet} {
        padding-left: 30px;
    }
`

const ImageWrapper = styled.div`

`

const Image = styled.img`
    width: 24px;
    height: 23px;
    object-fit: contain;
`

const Phone = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
     @media (max-width: 1000px) {
         flex-direction: column;
         align-items: center;
         
         gap: 15px;
     }
`

const Email = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;

    @media (max-width: 1000px) {
        flex-direction: column;
        align-items: center;
        gap: 15px;
    }
`

const Address = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;

    @media (max-width: 1000px) {
        flex-direction: column;
        align-items: center;
        gap: 15px;
    }
`

const SocialList = styled.ul`
    display: flex;
    gap: 30px;
    padding-bottom: 65px;
    
    @media ${Theme.media.mobile} {
        gap: 35px;
    }
`

const SocialItem = styled.li`
    
`

const SocialLink = styled.a`
    cursor: pointer;
    
    svg {
        display: block;
        overflow: visible;
    }
`