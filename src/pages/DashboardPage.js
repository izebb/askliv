import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import Logo from '../assets/purple_logo.png'

const height = 150

const Topbar = styled.nav`
  height: ${height}px;
  background-color: #fff;
  border-bottom: 1px solid #ddd;
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
`

const LogoImg = styled.img`
  width: 100px;
  margin: 0 10px;
`

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
`

const Navigation = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  position: absolute;
  bottom: 0;
  align-items: center;
  justify-content: center;
  width: 100%;
`
const List = styled.li`
  margin: 0 10px;
`

const StyledLink = styled(Link)`
  display: block;
  text-decoration: none;
  color: #444;
  font-size: 18px;
  padding: 20px 10px;
`

const H1 = styled.h1`
  font-weight: 300;
  text-align: center;
  margin-bottom: 50px;
`
const Content = styled.div`
  padding-top: ${height + 10}px;
  max-width: 1000px;
  margin: 20px auto;
  
`

export const DashboardPage = () => {
  return (
    <>
      <Topbar>
        <LogoWrapper>
          <LogoImg src={Logo} />
        </LogoWrapper>

        <Navigation>
          <List>
            <StyledLink>Checklist</StyledLink>
          </List>
          <List>
            <StyledLink>Info</StyledLink>
          </List>
        </Navigation>
      </Topbar>
      <Content>
        <H1>Get Ready for your trip to Malaysia</H1>
        <Accordion />
      </Content>
    </>
  )
}

const AccordionHeader = styled.div`
  background-color: #f4f4f4;
  padding: 20px 10px;
  position: relative;
`
const AccordionHeaderTitle = styled.div`
  padding: 20px 50px;
  font-size: 22px;
  font-weight: 500;
  color: #000;
  position: relative;
`
const AccordionBody = styled.div``
const AccordionWrapper = styled.div``
const No  = styled.div`
    position: absolute;
    pointer-events: none;
    font-size:120px;
    font-weight: 900;
    top: -30px;
    left: -10px;
    opacity: 0.3;
`;

const Accordion = () => {
  return (
    <AccordionWrapper>
      <AccordionHeader>
        <No>1</No>
        <AccordionHeaderTitle>Vaccination</AccordionHeaderTitle>
      </AccordionHeader>
      <AccordionBody></AccordionBody>
    </AccordionWrapper>
  )
}
