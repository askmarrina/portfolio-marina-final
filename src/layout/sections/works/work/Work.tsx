
import styled from "styled-components";
import {Theme} from "../../../../styles/Theme.tsx";

type WorkPropsType = {
    title: string
    text: string
    src: string
}

export const Work = (props: WorkPropsType) => {
    return (
        <StyledWork>
            <Image src={props.src}/>
            <WorkDescription>
                <Title>{props.title}</Title>
                <Text>{props.text}</Text>
            </WorkDescription>

        </StyledWork>
    );
};

const StyledWork = styled.div`
   //flex: 0 1 33.333%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    
`

const WorkDescription = styled.div`
    
`

const Image = styled.img`
    width: 330px;
    height: 330px;
    object-fit: cover;
    aspect-ratio: 1/1;
    @media ${Theme.media.mobile} {
        max-width: 330px;
        width: 100%;
    }
`
const Title = styled.h3`
    font-family: 'Nunito', sans-serif;
    font-weight: 600;
    font-size: 20px;
    line-height: 150%;
    color: ${Theme.colors.workColor};
    
`

const Text = styled.span`
    font-family: 'Nunito', sans-serif;
`