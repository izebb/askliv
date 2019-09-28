import React from 'react'
import styled from 'styled-components'

import arrow from '../assets/arrow.svg'

const ButtonStyled = styled.button`
    background: transparent;
    font-size: 18px;
    border: none;
    margin-left: 30px;
    display: flex;
    align-items: center;
    font-weight: 600;
    background: #100ddc;
    color: #FFF;
    padding: 0 10px;
    border-radius: 5px;
    cursor: pointer;
`;

const Img = styled.img`
    width: 35px;
    position: relative;
    top:5px;
    margin-left: 4px;
`;

export const ButtonNext = ({children}) => {
  return <ButtonStyled>
      <span>{children}</span>
      <Img src={arrow} />
  </ButtonStyled>
}
