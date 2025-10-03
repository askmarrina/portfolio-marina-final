
import styled from "styled-components";
import quote from "../../../assets/images/quote-2.png";
import rating from '../../../assets/images/rating.png'
import {Theme} from "../../../styles/Theme.tsx";

type SlidePropsType = {
    src: string;
    name: string;
    customer: string;
    text: string;
}


export const Slide = (props: SlidePropsType) => {
    return (
        <StyledSlide>

            <Image src={props.src}/>
            <Name>{props.name}</Name>
            <Customer>{props.customer}</Customer>
            <Text>{props.text}</Text>
            <Rating src={rating}/>

        </StyledSlide>
    );
};

const StyledSlide = styled.div`
    background-color: white;
    max-width: 725px;
    //width: 725px;
    min-height: 395px;
    border-radius: 140px 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-shadow: 0 54px 104px 0 rgba(0, 0, 0, 0.04);
    position: relative;
    margin-bottom: 40px;
    padding: 20px;
    &::before {
        content: '';
        display: inline-block;
        background-image: url(${quote}) ;
        background-size: contain;
        background-repeat: no-repeat;
        position: absolute;
        top: 18%;
        left: 8%;
        width: 15%;
        //top: 75px;
        //left: 90px;
        max-width: 110px;
        height: 85px;
        
    }
    
    @media ${Theme.media.mobile} {
        
    }
    
`
const Image = styled.img`
    width: 104px;
    height: 104px;
    margin-bottom: 20px;
`

const Name = styled.h4`
    margin-bottom: 4px;
`

const Customer = styled.h5`
    color: red;
    margin-bottom: 20px;
`
const Text = styled.p`
    margin-bottom: 12px;
    max-width: 610px;
`
const Rating = styled.img`
    width: 154px;
    height: 26px;
    object-fit: cover;
    
`