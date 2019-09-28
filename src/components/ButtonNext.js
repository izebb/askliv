import React from 'react'
import styled from 'styled-components'
import Button from '@kiwicom/orbit-components/lib/Button'

import arrow from '../assets/arrow.svg'


const ButtonStyled = styled.span`
  font-size: 18px;
  border: none;
  display: flex;
  align-items: center;
  font-weight: 600;
  color: #fff;
  border-radius: 5px;
  cursor: pointer;
`

const Img = styled.img`
  width: 35px;
  position: relative;
  top: 5px;
  margin-left: 4px;
`

const MainButton = styled(Button)`
  background-color: #381b57;

  &:hover {
    background-color: #746187;
  }
`

export const ButtonNext = (props) => {
  return (
    <MainButton onClick={props.onClick}>
      <ButtonStyled>
        <span>{props.children}</span>
        <Img src={arrow} />
      </ButtonStyled>
    </MainButton>
  )
}
