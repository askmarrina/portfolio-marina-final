import {Icon} from "../icon/Icon.tsx";
import styled from "styled-components";
import {FlexWrapper} from "../FlexWrapper.tsx";


export const ProgressBarContainer = () => {
    return (
        <div>
            <StyledProgressBarContainer>
                <TwoColumns>
                    <Column>
                        <ProgressBar>
                            <FlexWrapper>
                                <Icon iconId={'photoshop'}/>
                                <ProgressLine>
                                    <PercentLine className={'photoshop'}>
                                    </PercentLine>
                                </ProgressLine>
                            </FlexWrapper>
                        </ProgressBar>

                        <ProgressBar>
                            <FlexWrapper>
                                <Icon iconId={'illustrator'}/>
                                <ProgressLine>
                                    <PercentLine className={'illustrator'}>
                                    </PercentLine>
                                </ProgressLine>
                            </FlexWrapper>
                        </ProgressBar>
                    </Column>
                    <Column>
                        <ProgressBar>
                            <FlexWrapper>
                                <Icon iconId={'figma'}/>
                                <ProgressLine>
                                    <PercentLine className={'figma'}>
                                    </PercentLine>
                                </ProgressLine>
                            </FlexWrapper>
                        </ProgressBar>
                    </Column>
                </TwoColumns>
            </StyledProgressBarContainer>

        </div>
    );
};

const StyledProgressBarContainer = styled.div`
   width: 100%;
`

const TwoColumns = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 50px;

    @media (max-width: 635px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        gap: 12px;
    }
`

const Column = styled.div`
    //flex: 1 1 45%;
    min-width: 270px;
    display: flex;
    flex-direction: column;
    gap: 20px;
`

const ProgressBar = styled.div`
    //margin-top: 65px;
    //min-width: 600px;
    //width: 100%;
    
`

const ProgressLine = styled.div`
    width: 210px;
    height: 8px;
    background-color: #C4C4C4;
    position: relative;
    top: 28px;
    left: 15px;
`

const PercentLine = styled.div`
    position: absolute;
    height: 8px;
    background-color: #FB3F5C;
    &.photoshop {
        width: 70%;

        &::before {
            content: '70%';
            left: 40%;
            top: -20px;
            position: relative;
            font-family: 'Nunito Sans', sans-serif;
            font-size: 14px;
            font-weight: 400;
            color: #000;
        }
    }
    
    &.illustrator {
        width: 80%;

        &::before {
            content: '80%';
            left: 40%;
            top: -20px;
            position: relative;
            font-family: 'Nunito Sans', sans-serif;
            font-size: 14px;
            font-weight: 400;
            color: #000;
        }
    }

    &.figma {
        width: 50%;

        &::before {
            content: '50%';
            left: 35%;
            top: -20px;
            position: relative;
            font-family: 'Nunito Sans', sans-serif;
            font-size: 14px;
            font-weight: 400;
            color: #000;
        }
    }
    
`

