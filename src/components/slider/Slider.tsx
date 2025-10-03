
import {Slide} from '../slider/slide/Slide.tsx'
import styled from "styled-components";
import {FlexWrapper} from "../FlexWrapper.tsx";
import client from '../../assets/images/client.png'
import {Theme} from "../../styles/Theme.tsx";
export const Slider = () => {
    return (
        <StyledSlider>
            <FlexWrapper>
                <Slide src={client}
                        name={'Adams Ademola'}
                        customer={'Happy Client'}
                        text={'“Everyone working in the office is very knowledgeable about all types of dental work and options for your individual needs.”'}/>
            </FlexWrapper>
            <Pagination>
                <span className={'active'}> </span>
                <span> </span>
                <span> </span>
            </Pagination>
        </StyledSlider>
    );
};

const StyledSlider = styled.div`
    
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
`

const Pagination = styled.div`
    span {
        display: inline-block;
        width: 10px;
        height: 10px;
        border-radius: 100%;
        background-color: ${Theme.colors.paginationSecondary};
        cursor: pointer;
        &.active {
            background-color: ${Theme.colors.paginationPrimary};
        }
        
        & + span {
            margin-left: 10px;
        }
    }
    
    @media ${Theme.media.mobile} {
        display: none;
    }
`