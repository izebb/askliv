import React from 'react'
import styled from 'styled-components'
import Vaccination from '../assets/vaccination.svg';
import { some } from 'lodash'
import { removePropertiesDeep } from '@babel/types';


const AccordionHeader = styled.div`
  background-color: #f4f4f4;
  padding: 20px 30px;
  position: relative;
  display: flex;
  align-items: center;
  overflow: hidden;
  border-radius: 5px 5px 0  0;
`
const AccordionHeaderTitle = styled.div`
  padding: 20px;
  font-size: 22px;
  font-weight: 500;
  color: #000;
  position: relative;
`
const AccordionBody = styled.div`
    border-top: 2px solid #DDD;
    font-size: 18px;
    line-height: 1.5;
    color: #333;
`
const AccordionWrapper = styled.div`
    margin-bottom: 20px;
`

const Button = styled.button`
  margin-left: auto;
  background: #DDD;
  border-radius: 1em;
  font-size: 15px;
  border: none;
  padding: 5px 15px;
  font-weight: 600;
`

const VaccinationImg = styled.img`
    width: 50px;
    width: 110px;
    left: -20px;
    position: absolute;
    bottom: -30px;
    opacity: 0.12;
`

const StyledImg = styled.img`
    height: 300px;
`


export const Accordion = (props) => {
    const { bloc } = props
    const arrayBody = 
        some(bloc.body) &&
        bloc.body.map(bodyEntity => {
            if (bodyEntity.includes('ctfassets')) {
                return <StyledImg src={bodyEntity} />
            } else {
                return <p>{bodyEntity}</p>
            }
        })
    return (

        <AccordionWrapper>
            <AccordionHeader>
                <VaccinationImg src={Vaccination} />
                <AccordionHeaderTitle>{bloc.title}</AccordionHeaderTitle>
                <Button>Mark as done</Button>
            </AccordionHeader>
            <AccordionBody>
                {arrayBody}
            </AccordionBody>
        </AccordionWrapper>
    )
}
