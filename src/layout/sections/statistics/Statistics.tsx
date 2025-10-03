
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {Theme} from "../../../styles/Theme.tsx";
import {font} from "../../../styles/Common.tsx";


export const Statistics = () => {
    return (
        <StyledStatistics>
            <FlexWrapper justify={'space-around'} gap={'50px'} align={'center'}>
                <StatisticsItem>
                    <span>81</span>
                    <h3>Happy Customers</h3>
                </StatisticsItem>
                <StatisticsItem>
                    <span>97+</span>
                    <h3>Completed Projects</h3>
                </StatisticsItem>
                <StatisticsItem>
                    <span>50</span>
                    <h3>Awards won</h3>
                </StatisticsItem>
            </FlexWrapper>
        </StyledStatistics>
    );
};

const StyledStatistics = styled.section`
    
    display: flex;
    justify-content: space-around;
    gap: 50px;
    background-color: ${Theme.colors.secondaryBg};
    align-items: center;
    font-family: 'Nunito', sans-serif;
    padding: 60px 20px;
    
    
`

const StatisticsItem = styled.div`
    display: flex;
    flex-direction: column;
    span {
        font-weight: 700;
        font-size: 48px;
        text-transform: uppercase;
        color: ${Theme.colors.font};

        @media (max-width: 800px) {
            ${font({family: "'Nunito', sans-serif", weight: 700, Fmax: 36, Fmin: 11})}
        }
    }
    
    h3 {
        font-weight: 700;
        font-size: 36px;
        text-transform: uppercase;
        color: ${Theme.colors.font};

        @media (max-width: 800px) {
            ${font({family: "'Nunito', sans-serif", weight: 700, Fmax: 36, Fmin: 11})}
        }
    }

    
`