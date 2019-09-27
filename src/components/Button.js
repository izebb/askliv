import React from 'react'
import styled from 'styled-components'

const ButtonStyled = styled.button``;

export const Button = () => {
  return <Container>
    <Counter>
      <CounterLarge>1</CounterLarge> /
      <CounterSmall>1</CounterSmall>
    </Counter>
    <Title>What country are you going to?</Title>
    <Question >Antartica</Question>
    <Question >Antartica</Question>
    <Question >Antartica</Question>
    <Question >Antartica</Question>
  </Container>
}
