
import styled from 'styled-components';
import {SectionTitle} from "../../../components/SectionTitle.tsx";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import book from '../../../assets/images/book.webp'
import cola from '../../../assets/images/cola.webp'
import magazine from '../../../assets/images/magazine.webp'
import orange from '../../../assets/images/orange.webp'
import plant from '../../../assets/images/plant.webp'
import sauce from '../../../assets/images/sauce.webp'
import {Work} from "../works/work/Work.tsx"
import {Theme} from "../../../styles/Theme.tsx";
import {Container} from "../../../components/Container.tsx";


export const Works = () => {
    return (
        <StyledWorks>
            <Container>
                <SectionTitle>Latest works</SectionTitle>
                <FlexWrapper justify={'space-around'} align={'center'} wrap={'wrap'} gap={'60px 45px'}>
                    <Work src={sauce}
                          title={'Project title'}
                          text={'UI, Art drection'}/>
                    <Work src={magazine}
                          title={'Project title'}
                          text={'UI, Art drection'}/>
                    <Work src={orange}
                          title={'Project title'}
                          text={'UI, Art drection'}/>
                    <Work src={plant}
                          title={'Project title'}
                          text={'UI, Art drection'}/>
                    <Work src={cola}
                          title={'Project title'}
                          text={'UI, Art drection'}/>
                    <Work src={book}
                          title={'Project title'}
                          text={'UI, Art drection'}/>

                </FlexWrapper>
            </Container>

        </StyledWorks>
    );
};

const StyledWorks = styled.section`
    background-color: ${Theme.colors.primaryBg};
    margin: 145px 0 195px;
    
`