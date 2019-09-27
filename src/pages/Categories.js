import React from 'react'
import styled from 'styled-components'

import Diabilities from '../assets/diabilities.svg'
import Allegies from '../assets/allegies.svg'
import Pregnancy from '../assets/pregnancy.svg'
import Chronic from '../assets/chronic.svg'
import TrustSafety from '../assets/trust-safety.svg'
import Information from '../assets/information.svg'
import Globe from '../assets/globe.svg'

import { DestinationsSearch } from '../components/DestinationsSearch'

const Container = styled.div`
  padding: 20px 100px;
`

const CategoryImage = styled.img`
  height: 100%;
`
const CategoryImageWrapper = styled.div`
  width: 70px;
  height: 70px;

`
const Heading = styled.h1``

const Content = styled.div``

const Category = styled.div`
  width: 200px;
  height: 150px;
  background-color: #fff;
  margin: 17px 30px;
  display: flex;
  padding: 10px;
  justify-content: flex-end;
  flex-direction: column;
  box-shadow: 0 0px 1px rgba(0, 0, 0, 0.02), 0 0 9px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
`
const Categories = styled.div`
  display: flex;
  flex-wrap: wrap;
  cursor: pointer;
`
const CategorTitle = styled.div`
  display: flex;
  flex-wrap: wrap;
  font-size: 18px;
  font-weight: 600;
  color: #444;
`

const catgories = [
  {
    icon: Diabilities,
    type: 'Disabilities'
  },
  {
    icon: Allegies,
    type: 'Allergies'
  },
  {
    icon: Pregnancy,
    type: 'Pregnancy'
  },
  {
    icon: Chronic,
    type: 'Chronic conditions'
  },
  {
    icon: TrustSafety,
    type: 'Trust and safty'
  },
  {
    icon: Globe,
    type: 'Convenience'
  },
  {
    icon: Information,
    type: 'General information'
  }
]

export const CategoriesPage = () => {
  return (
    <Container>
      <Content>
        <Heading>Select a category</Heading>
        <Categories>
          {catgories.map(category => (
            <Category>
              <CategoryImageWrapper>
                <CategoryImage src={category.icon} />
              </CategoryImageWrapper>
              <CategorTitle>{category.type}</CategorTitle>
            </Category>
          ))}
        </Categories>
        <div></div>
      </Content>
    </Container>
  )
}
