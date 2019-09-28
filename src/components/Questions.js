import React from 'react'
import styled from 'styled-components'

import { DestinationsSearch } from '../components/DestinationsSearch'
import { ButtonNext } from './ButtonNext'
import { ButtonPrev } from './ButtonPrev'

const Container = styled.form``

const Title = styled.h1`
  font-size: 25px;
  font-weight: 500;
  margin-top: 30px;
  margin-bottom: 40px;
`

const Counter = styled.div`
  font-size: 20px;
`
const CounterSmall = styled.span``
const CounterLarge = styled.span`
`

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`

const QuestionsWrapper = styled.div`
`

export const Questions = (props) => {
  const { setIsModalOpen } = props

  return (
    <Container>
      <Counter>
        <CounterLarge>1</CounterLarge> /<CounterSmall>1</CounterSmall>
      </Counter>
      <Title>What country are you going to?</Title>
      <QuestionsWrapper>
        <Question>Antartica</Question>
        <Question>Antartica</Question>
        <Question>Antartica</Question>
        <Question>Antartica</Question>
        <ButtonWrapper>
          <ButtonPrev>Prev</ButtonPrev>
          <ButtonNext setIsModalOpen={setIsModalOpen}>Next</ButtonNext>
        </ButtonWrapper>
      </QuestionsWrapper>
    </Container>
  )
}

const QuestionContainer = styled.div`
  background-color: #eee;
  padding: 30px;
  border-radius: 10px;
  font-size: 20px;
  margin-bottom: 20px;
`

const Question = ({ children }) => {
  return <QuestionContainer>{children}</QuestionContainer>
}
