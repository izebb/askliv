import React from 'react'
import styled from 'styled-components'
import { Link, BrowserRouter as Router, Route,Switch } from 'react-router-dom'

import Logo from '../assets/purple_logo.png';
import Vaccination from '../assets/vaccination.svg';

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
  position: relative;
  padding: 20px 10px;

  &:before {
    height: 5px;
    width: 100%;
    content: ' ';
    opacity: 0;
    position: absolute;
    bottom: 0;
    left: 0;
    background-color: #381a57;
    border-radius: 5px 5px 0 0;
    ${(({isActive}) => isActive && ({
      opacity: 1
    }))}
  }

  
`

const H1 = styled.h1`
  font-weight: 300;
  text-align: center;
  margin-bottom: 50px;
`
const Content = styled.div`
  padding-top: ${height + 10}px;
  max-width: 900px;
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
            <StyledLink isActive to="/dashboard/checklist">Checklist</StyledLink>
          </List>
          <List>
            <StyledLink to="/dashboard">Info</StyledLink>
          </List>
        </Navigation>
      </Topbar>
      <Content>
        <Router>
          <Switch>
            <Route exact path='/dashboard/checklist' component={Checklist} />
            <Route exact path='/dashboard' component={Checklist} />
            </Switch>
        </Router>
      </Content>
    </>
  )
}

const AccordionHeader = styled.div`
  background-color: #f4f4f4;
  padding: 20px 30px;
  position: relative;
  display: flex;
  align-items: center;
  overflow: hidden;
  border-radius: 5px 5px 0  0;
`
const AccordionHeaderTitle = styled.div`
  padding: 20px;
  font-size: 22px;
  font-weight: 500;
  color: #000;
  position: relative;
`
const AccordionBody = styled.div`
    border-top: 2px solid #DDD;
    font-size: 18px;
    line-height: 1.5;
    color: #333;
`
const AccordionWrapper = styled.div`
    margin-bottom: 20px;
`
const No  = styled.div`
    position: absolute;
    pointer-events: none;
    font-size:120px;
    font-weight: 900;
    top: -30px;
    left: -10px;
    opacity: 0.2;
`;

const VaccinationImg = styled.img`
    width: 50px;
    width: 110px;
    left: -20px;
    position: absolute;
    bottom: -30px;
    opacity: 0.12;
`

const Button = styled.button`
  margin-left: auto;
  background: #DDD;
  border-radius: 1em;
  font-size: 15px;
  border: none;
  padding: 5px 15px;
  font-weight: 600;
`;

const Accordion = ({ title}) => {
  return (
    <AccordionWrapper>
      <AccordionHeader>
        <VaccinationImg src={Vaccination} />
        <AccordionHeaderTitle>{title}</AccordionHeaderTitle>
        <Button>Mark as done</Button>
      </AccordionHeader>
      <AccordionBody>

    <p>
        Est cupidatat exercitation ad eiusmod proident. Aute labore velit ea aliquip veniam est Lorem tempor tempor mollit. Cillum veniam reprehenderit cupidatat aliquip.
    </p>
          
    <p>
    Ad velit cillum pariatur ex cillum aliquip quis. Incididunt duis aliqua elit deserunt anim non non elit commodo nulla. Nisi pariatur est Lorem tempor mollit nisi proident aute exercitation consequat. Dolor non labore dolor eu aute esse irure magna fugiat. Cupidatat duis irure cillum adipisicing ea ullamco. Laboris proident nostrud minim consequat cillum.
    </p>
    <p>

    Qui ullamco mollit enim enim commodo id. Laborum reprehenderit incididunt in consectetur irure deserunt voluptate labore duis. Velit Lorem nisi laboris amet sint laboris.
    </p>
      </AccordionBody>
    </AccordionWrapper>
  )
};

const Checklist = () => (
  <>
  <H1>Get Ready for your trip to Malaysia ✈️</H1>
          <Accordion  title="Vaccination"/>
          <Accordion title="Pregnancy" />
          </>
)
