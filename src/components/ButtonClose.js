import React from 'react'
import styled from 'styled-components'
import Button from '@kiwicom/orbit-components/lib/Button'

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

export const ButtonClose = (props) => {
    return (
        <Wrapper>
            <Button onClick={() => props.onClick(false)}>
                <ButtonStyled>
                    <span>{props.children}</span>
                </ButtonStyled>
            </Button>
        </Wrapper>
    )
}
