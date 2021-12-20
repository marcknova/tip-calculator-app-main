import styled from 'styled-components'

const ContentButton = styled.div`
    width: 100%;
    height: 100%;
`

const Botton = styled.button`
    width: 90%;
    height: 70%;

    background: #00474B;
    color: #fff;
    font-size: 20px;
    font-weight: 700;
    border: none;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
        transition: 0.3s ease;
        background: #9FE8DF;
        color: #00474B;
    }
`

const Button = ({value,...props}) => {
    return(
       <ContentButton>
           <Botton type="submit" {...props}>{value}</Botton>
       </ContentButton>
    )
}

export default Button