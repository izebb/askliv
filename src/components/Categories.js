import React from 'react'
import styled from 'styled-components'
import {withRouter} from 'react-router-dom'
import { snakeCase } from 'lodash'
import LogoPurple from '../assets/purple_logo.png'
import arrow from '../assets/arrow.svg'
import Diabilities from '../assets/diabilities.svg'
import Allegies from '../assets/allegies.svg'
import Pregnancy from '../assets/pregnancy.svg'
import Chronic from '../assets/chronic.svg'
import TrustSafety from '../assets/trust-safety.svg'
import Information from '../assets/information.svg'
import Globe from '../assets/globe.svg'

import { DestinationsSearch } from '../components/DestinationsSearch'
import Button from '@kiwicom/orbit-components/lib/Button'
import { ButtonNext } from './ButtonNext'
import { CategoriesContext } from '../context/CategoriesContext'

const Image = styled.img`
  width: 150px;
`

const Body = styled.div`
  margin-top: 50px;
`

const CategoryImage = styled.img`
  height: 100%;
`
const CategoryImageWrapper = styled.div`
  width: 70px;
  height: 70px;
`

const CategoriesWrapper = styled.div`
  width: 25%;
  padding: 0 10px;
  margin-bottom: 50px;
  min-width: 150px;
  flex-shrink: 0;
`

const Category = styled.div`
  width: 100%;
  height: 150px;
  background-color: #fff;
  display: flex;
  padding: 10px;
  justify-content: flex-end;
  flex-direction: column;
  box-shadow: 0 0px 1px rgba(0, 0, 0, 0.02), 0 0 9px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  transition: box-shadow 100ms;
  opacity: 0.7;

  &:hover {
    background-color: #fdfdfd;
  }

  ${({ isChecked }) =>
    isChecked && {
    boxShadow: '0 0px 1px rgb(56, 27, 87), 0 0 1px 2px #381b57',
      opacity: 1
    }}
`
const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  cursor: pointer;
  margin-top: 30px;
`
const CategorTitle = styled.div`
  display: flex;
  flex-wrap: wrap;
  font-size: 18px;
  font-weight: 600;
  color: #444;
`

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`

const Input = styled.input`
  opacity: 0;
`

const iconmaps = {
  convenience: Globe,
  disabilities: Diabilities,
  allergies: Allegies,
  chronic_conditions: Chronic,
  trust_safety: TrustSafety,
  pregnancy: Pregnancy,
  general_information: Information
}

export const Categories = withRouter(({ data = [], history }) => {
  const context = React.useContext(CategoriesContext)
  const [checked, setChecked] = React.useState()

  let categories = data.map(title => ({
    title,
    icon: iconmaps[snakeCase(title)],
    type: snakeCase(title)
  }))

  const handleClick = () => {
    context.setSelectedCategory(checked)
    history.push('/questionnaire')
  }

  return (
    <>
      <Container>
        {categories.map(category => (
          <CategoriesWrapper>
            <Category onClick={() => setChecked(category.type)} isChecked={checked === category.type}>
              <Input onChange={() => setChecked(category.type)} checked={checked === category.type} type="radio" name="categories" value={category.type} />
              <CategoryImageWrapper>
                <CategoryImage src={category.icon} />
              </CategoryImageWrapper>
              <CategorTitle>{category.title}</CategorTitle>
            </Category>
          </CategoriesWrapper>
        ))}
      </Container>
      <ButtonWrapper>
        <ButtonNext onClick={handleClick}>Next </ButtonNext>
      </ButtonWrapper>
    </>
  )
})
