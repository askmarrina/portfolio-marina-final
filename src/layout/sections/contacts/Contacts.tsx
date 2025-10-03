
import {SectionTitle} from "../../../components/SectionTitle.tsx";
import styled from "styled-components";
import {Button} from "../../../components/Button.tsx";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {Container} from "../../../components/Container.tsx";
import {Theme} from "../../../styles/Theme.tsx";

export const Contacts = () => {
    return (
        <StyledContacts>
            <Container>
                <SectionTitle>Get in Touch</SectionTitle>
                <FlexWrapper align={'flex-start'} justify={'space-around'} wrap={'wrap'}>
                    <StyledForm>
                        <FieldGroup>
                            <Label>Your Email Address</Label>
                            <Field placeholder={'something@website.com'}/>
                            <Label>Subject</Label>
                            <Field placeholder={'Question about your article'}/>
                            <Field placeholder={'Your message starts with…'} as={'textarea'}/>
                        </FieldGroup>
                        <Button primary type={'submit'}>Send</Button>
                    </StyledForm>
                    <Map src={'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d105883.81977075207!2d-118.38638171008627!3d33.970196961709775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2b7dbd41fb7e9%3A0x24a2ff6a792f2618!2sSouth%20Los%20Angeles%2C%20Los%20Angeles%2C%20CA%2C%20USA!5e0!3m2!1sen!2ssk!4v1757957768009!5m2!1sen!2ssk'}
                         loading={'lazy'}
                         referrerPolicy={'no-referrer-when-downgrade'}
                         allowFullScreen
                    />
                </FlexWrapper>
            </Container>


        </StyledContacts>
    );
};

const StyledContacts = styled.section`
    margin-bottom: 160px;
    
    ${Button} {
        @media (max-width: 1085px) {
            margin: 0 auto 50px;
            
    }
    }
`

const StyledForm = styled.form`
    max-width: 525px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 35px;
    
    textarea {
        resize: none;
        height: 175px;
        
    }
`

const Label = styled.label`
    margin-bottom: 10px;
`

const Field = styled.input`
    width: 100%;
    padding: 14px;
    font-family: 'Nunito Sans', sans-serif;
    font-weight: 400;
    font-size: 16px;
    color: ${Theme.colors.formColor};
    
    
`

const FieldGroup = styled.div`
    display: flex;
    flex-direction: column;

    ${Field} + ${Label} {
        margin-top: 35px;
    }

    ${Field} + ${Field} {
        margin-top: 55px;
    }
    
`

const Map = styled.iframe`
    width: 512px;
    height: 506px;
    border: 0;
    
    @media ${Theme.media.mobile} {
        max-width: 512px;
        width: 100%;
    }
`

