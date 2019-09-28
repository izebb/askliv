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
  margin-right: 10px;
`

const Wrapper = styled.div`
  margin-right: 10px;
`

const Img = styled.img`
  width: 35px;
  position: relative;
  top: -2px;
  margin-left: 4px;
  transform: rotate(-180deg);
`

export const ButtonPrev = ({ children }) => {
  return (
    <Wrapper>
      <Button type="secondary">
        <ButtonStyled>
          <Img src={arrow} />
          <span>{children}</span>
        </ButtonStyled>
      </Button>
    </Wrapper>
  )
}
