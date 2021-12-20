import { Formik, Form } from 'formik';
import { useState } from 'react';
import * as Yup from 'yup'
import styled from 'styled-components'
import Content from './Content';
import Input from './Input'
import Result from './Result';

const styles = {
    form: {
        width: '100%',
        height: '100%',
    },
    Div:{
        widht: '100%',
        height: '100%',
    },
    fass: {
        position: 'fixed',
        top: '29%',
        marginLeft: '23px',
        fontSize: '24px',
        color: 'grey'
    },
}

const Title = styled.h2`
        margin-left: 5px;
        margin-bottom: 5px;
        color: #657173;
        font-size: 20px;
        font-weight: 600;
        letter-spacing: 2px;

        @media (max-width: 320px) {
            font-size: 18px;
        }
`

const ContainerIzq = styled.div`
    width: 100%;
    height: 100%;
`

const ContainerDer = styled.div`
    width: 100%;
    height: 100%;
`

const Contenido = styled.div`
    &.ContentIzq {
    width: 83%;
    height: 80%;
    margin: 8%;
    }

    &.ContentDer {
    background: #00474B;
    width: 95%;
    height: 25em;
    border-radius: 15px;
    margin: 6% 0 5% 0;

    @media (max-width: 320px) {
        width: 90%;
        height: 16em;
        margin: 0 5% 0 5%;
    }
    }
`

const ContentInput = styled.div`
    height: 80px;
    /* padding: 10px; */
`

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    height: 140px;
    padding: 5px;

    @media (max-width: 320px) {
        grid-template-columns: repeat(2, 1fr);
        width: 100%;
        height: 100%;
        padding: 0;
    }
    `

const ContentButton = styled.div`
        width: 100%;
        height: 100%;
    `

const Botton = styled.button`
    width: 90%;
    height: 69%;

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

    @media (max-width: 320px) {
        width: 120px;
        height: 45px;
        margin: 8px;
    }
`

const CustomInput = styled.input`
    width: 90%;
    height: 60%;
    text-align: right;
    background: #F3F8FB;
    font-size: 25px;
    font-weight: 700;
    color: #0F4245;
    border: none;
    border-radius: 5px;

    &:focus {
        outline: unset;
        border: 2px solid #22C2AC;
    }
    
    @media (max-width: 320px) {
        height: 65%;
        margin-top: 8px;
    }
    
`

const BottonReset = styled.button`
    position: relative;
    top: 30%;
    width: 80%;
    height: 50px;
    margin: 0 10% 0 10%;

    background: #9FE8DF;
    font-size: 1.5em;
    border: none;
    border-radius: 8px;
    cursor: pointer;

    @media (max-width: 320px) {
        top: 12%;
    }
`

const Flex = styled.div`
    display: flex;
    flex-direction: row;

    @media (max-width: 320px) {
        flex-direction: column;
        }
`

const DivIzq = () => {

    const [operation, setOperation] = useState('')
    const [boton, setBoton] = useState(0)
    const [tip, setTip] = useState(0)
    const [custom, setCustom] = useState('')

    const compoundBill = (bill, nPeople) => {
        let operation;
        var total;
        if(custom !== ''){
            operation = (((bill/100) * custom)/ nPeople)
            total = operation.toFixed(2)
        } else {
            operation = (((bill/100) * boton)/ nPeople)
            total = operation.toFixed(2)
        }
        return total
        }
        
    const value = (bill, nPeople) => {
        let decimal;
        let operation;
        var total2;
        if (custom !== '') {
            decimal = (parseInt(custom) + 100) / 100
            operation = ((bill * decimal) / nPeople)  
            total2 = operation.toFixed(2)          
        } else {
            decimal = (parseInt(boton) + 100) / 100
            operation = ((bill * decimal) / nPeople)
            total2 = operation.toFixed(2)
        }
                return total2
        }

    const handleSubmit = ({ bill, nPeople}) => {
        const val = compoundBill(Number(bill), Number(nPeople), Number(boton))
        const val2 = value(Number(bill), Number(nPeople), Number(boton))
        setOperation(val);  
        setTip(val2)
    }

    const initialValues = { bill: '', nPeople: '', };

    const reset = () => {
        setOperation("")
        setTip("")
        setCustom("")
    }

    return(
    <Content>
        <div>
            <Formik
            initialValues={initialValues}

            validationSchema={Yup.object({
            bill: Yup.number().required('Obligatorio')
            .typeError('Debe ser un numero')
            .min(1, 'Can`t be zero'),
            nPeople: Yup.number().required('Obligatorio')
            .typeError('Debe ser un numero')
            .min(1, 'Can`t be zero'), 
            custom: Yup.number().typeError('Debe ser un numero'),
            })}
            onSubmit={ handleSubmit }
            >
                <Form style={styles.form}>
                    <Flex>
                    <ContainerIzq>
                    <Contenido className="ContentIzq">
                        <ContentInput>
                        <Input name="bill" label="Bill" placeholder="0" />
                        </ContentInput>
                        <div style={styles.Div}>
                        <Title>Select Tip %</Title>
                        <Grid>
                        <ContentButton>
                            <Botton type="submit" value="5" onClick={e => setBoton(e.target.value)}>5%</Botton>
                        </ContentButton>
                        <ContentButton>
                            <Botton type="submit" value="10" onClick={e => setBoton(e.target.value)}>10%</Botton>
                        </ContentButton>
                        <ContentButton>
                            <Botton type="submit" value="15" onClick={e => setBoton(e.target.value)}>15%</Botton>
                        </ContentButton>
                        <ContentButton>
                            <Botton type="submit" value="25" onClick={e => setBoton(e.target.value)}>25%</Botton>
                        </ContentButton>
                        <ContentButton>
                            <Botton type="submit" value="50" onClick={e => setBoton(e.target.value)}>50%</Botton>
                        </ContentButton>
                        <ContentButton>
                            <CustomInput name="custom" type="number" value={custom} onInput={e => setCustom(e.target.value)} placeholder="Custom" autoComplete="off" />
                        </ContentButton>
                        </Grid>
                        </div>
                        <ContentInput>
                            <Input name="nPeople" label="Number Of People" placeholder="0" />
                        </ContentInput>
                    </Contenido>
                    </ContainerIzq>

                    <ContainerDer>
                    <Contenido className="ContentDer">
                        <Result name="Tip Amount" subName="person" value={operation} />
                        <Result name="Total" subName="person" value={tip} />
                        <BottonReset type='reset' onClick={reset} >Reset</BottonReset>
                        </Contenido>
                    </ContainerDer>
                    </Flex>
                </Form>
            </Formik>
        </div>
    </Content>
    )
}
export default DivIzq;
