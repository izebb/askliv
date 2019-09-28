import React from 'react'
import styled from 'styled-components'
import { get } from 'lodash'

import { DestinationsSearch } from '../components/DestinationsSearch'
import { ButtonNext } from './ButtonNext'
import { ButtonPrev } from './ButtonPrev'
import { getQuestionnaireByID, getQuestionnaire, getQuestionnaires } from '../utils/contentful/utils'
import { CategoriesContext } from '../context/CategoriesContext'

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
const CounterLarge = styled.span``

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`

const QuestionsWrapper = styled.div``
const Input  = styled.input`
  opacity: 0;
  pointer-events; none;
`;

export const Questions = props => {
  const [answers, setAnswers] = React.useState([])
  const [question, setQuestion] = React.useState('')
  const [answered, setAnswered] = React.useState(null)
  const context = React.useContext(CategoriesContext)
  const { setIsModalOpen } = props

  React.useEffect(() => {
    getQuestionnaires().then(response => {
      const item = response.find(item => {
        return get(item, 'fields.name', '').toLowerCase() === context.selectedCategory
      })

      if(item) {
        const questions = get(item, 'fields.question.0.fields')
        setAnswers(questions.answers)
        setQuestion(questions.question)
      }
     
    })
  }, [])


  if(!question) return null

  return (
    <Container>
      <Title>{question}</Title>
      <QuestionsWrapper>
        {answers.map(item => {
          return (
            <Question isChecked={answered === item} key={item} onClick={()  => setAnswered(item)}>
              <Input 
                name="answer" 
                checked={answered === item} 
                type="checkbox" 
                value={answered} />
              {item}
            </Question>
          )
        })}
        <ButtonWrapper>
          <ButtonNext setIsModalOpen={setIsModalOpen}>Finish</ButtonNext>
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
  
  ${({isChecked})  => isChecked && ({
    backgroundColor: 'green',
    color: 'white'
  })}
`

const Question = ({ children, isChecked, onClick }) => {
  return <QuestionContainer isChecked={isChecked} onClick={onClick}>{children}</QuestionContainer>
}
