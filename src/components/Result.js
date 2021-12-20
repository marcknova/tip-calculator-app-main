import styled from 'styled-components';

const TextContent = styled.div`
    padding: 5px;
    margin: 0 10px 0 10px;
    height: 80px;

    &.flex {
        display: flex;
        flex-direction: row;
    }

    @media (max-width: 320px) {
        height : 70px;
        padding: 1px;
    }
`

const DivContent = styled.div`
    width: 90%;
    margin-top: 15px;
    &.right{ 
        text-align: right;
        margin-right: 11%;
    }

    @media (max-width: 320px) {
        margin-top: 0;
    }
`

const TextChild = styled.h2`
    color: #fff;
    margin: 30px 0 0 25px;
    font-size: 1em;
    
    &.result{
        margin: 23px 0 0 0;
        color: #23C5AE;
        font-size: 45px;

        @media (max-width: 320px) {
            font-size: 33px;
        }
    }

    @media (max-width: 320px) {
        font-size: 0.9em;
    }
`

const TextP = styled.p`
    color: #709FA2;
    margin: 2px 0 0 25px;
`

const Result = ({value, name, subName, ...props}) => {
    return(
        <TextContent className="flex" {...props}>
        <DivContent>
        <TextChild>{name}</TextChild>
        <TextP>/ {subName}</TextP>
        </DivContent>
        <DivContent className="right">
        {  value !== '' ? <TextChild className="result">
        ${value}
        </TextChild>
        : 
        <TextChild className="result">
        $0.00
        </TextChild>
        }
        </DivContent>
    </TextContent>
    )
}

export default Result;