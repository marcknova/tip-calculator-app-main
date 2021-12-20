import styled, {css} from 'styled-components';
import { useField } from 'formik';

const Control = styled.div`
    margin-top: 15px;
`

const MyInput = styled.input`

    width: 100%;
    height: 40px;
    text-align: right;
    

    &.color {
    /* text-align: right; */
    background: #F3F8FB;
    font-size: 25px;
    font-weight: 600;
    color: #0F4245;
    border: none;
    border-radius: 5px;
    }

    &.error {
        border: 2px solid #f00;
    }

    &:focus {
        outline: unset;
        border: 2px solid #22C2AC;
    }

    ${({error}) => 
        error && css `
        border: 2px solid #f00;
        `
    }
`

const Label = styled.label`
    width: 100%;
    margin-bottom: 5px;
    color: #657173;
    font-size: 20px;
    font-weight: 600;
    letter-spacing: 2px;

    @media (max-width: 320px) {
        font-size: 18px;
    }
`

const ErrorMessage = styled.div`
    display: block;
    width: 50%;
    font-size: 15px;
    text-align: right;
    color: #f00;
`

const ContentLabel = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
`

const Input = ({ label, ...props }) => {
    const[field, meta] = useField(props)
    return(
        <Control>
            <ContentLabel>
                <Label>{ label }</Label> {meta.touched && meta.error ? (
                    <ErrorMessage>{meta.error}</ErrorMessage>
                        ) : null}
                </ContentLabel>
            <MyInput className="color" {...field} {...props} autoComplete="off" />
        </Control>
    )
} 

export default Input;