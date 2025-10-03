
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {Slider} from '../../../components/slider/Slider';
import {Theme} from "../../../styles/Theme.tsx";
import {Container} from "../../../components/Container.tsx";



export const Testimony = () => {
    return (
        <StyledTestimony>
            <Container>
                <FlexWrapper align={'center'} direction={'column'}>
                    <Slider/>
                </FlexWrapper>
            </Container>

        </StyledTestimony>
    );
};

const StyledTestimony = styled.section`
    background-color: ${Theme.colors.testimonyBg};
    min-height: 590px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 100px;
`
