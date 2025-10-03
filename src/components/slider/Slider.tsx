
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import styled from "styled-components";
import {FlexWrapper} from "../FlexWrapper.tsx";
import {Slide} from "./slide/Slide.tsx";
import client from '../../assets/images/client.png'
import './../../styles/slider.css'
import {Theme} from "../../styles/Theme.tsx";

type SliderPropsType = {
    src: string,
    name: string,
    customer: string,
    text: string
}

const SlideCard = (props: SliderPropsType) => {
    return (
        <StyledSlider>
            <FlexWrapper>
                <Slide src={props.src}
                       name={props.name}
                       customer={props.customer}
                       text={props.text}
                />
            </FlexWrapper>

        </StyledSlider>
    )
}

const items = [
    <SlideCard src={client} name={'Adams Ademola'} customer={'Happy Client'} text={'“Everyone working in the office is very knowledgeable about all types of dental work and options for your individual needs.”'}/>,
    <SlideCard src={client} name={'Adaddddms Ademola'} customer={'Happy Client'} text={'“Everyone working in the office is very knowledgeable about all types of dental work and options for your individual needs.”'}/>,
    <SlideCard src={client} name={'Adssssafdms Ademola'} customer={'Happy Client'} text={'“Everyone working in the office is very knowledgeable about all types of dental work and options for your individual needs.”'}/>,
];

export const Slider = () => (

    <StyledSlider>
        <AliceCarousel
            mouseTracking
            items={items}
        />
    </StyledSlider>

);


// import {Slide} from '../slider/slide/Slide.tsx'
// import styled from "styled-components";
// import {FlexWrapper} from "../FlexWrapper.tsx";
// import client from '../../assets/images/client.png'
// import {Theme} from "../../styles/Theme.tsx";
// export const Slider = () => {
//     return (
//         <StyledSlider>
//             <FlexWrapper>
//                 <Slide src={client}
//                         name={'Adams Ademola'}
//                         customer={'Happy Client'}
//                         text={'“Everyone working in the office is very knowledgeable about all types of dental work and options for your individual needs.”'}/>
//             </FlexWrapper>
//             <Pagination>
//                 <span className={'active'}> </span>
//                 <span> </span>
//                 <span> </span>
//             </Pagination>
//         </StyledSlider>
//     );
// };
//
 const StyledSlider = styled.div`

    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
     justify-content: center;
`
//
// const Pagination = styled.div`
//      span {
//        display: inline-block;
//         width: 10px;
//         height: 10px;
//         border-radius: 100%;
//        background-color: ${Theme.colors.paginationSecondary};
//        cursor: pointer;
//          &.active {
//             background-color: ${Theme.colors.paginationPrimary};
//          }
//
//         & + span {
//             margin-left: 10px;
//         } }
//
//     @media ${Theme.media.mobile} {
//         display: none;
//      }
//  `