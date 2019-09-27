import React from 'react'
import styled from 'styled-components'

const ButtonStyled = styled.button`
    background: transparent;
    font-size: 20px;
    border: none;
    margin-left: 30px;
`;

export const ButtonNext = ({children}) => {
  return <ButtonStyled>
      <span>{children}</span>
  </ButtonStyled>
}
