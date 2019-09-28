import React from 'react'
import styled from 'styled-components'
import { Link, BrowserRouter as Router, Route,Switch } from 'react-router-dom'

import Logo from '../assets/purple_logo.png';
import { Checklist } from '../components/Checklist'
import Vaccination from '../assets/vaccination.svg';
import Pregnancy from '../assets/pregnancy_checklist.svg';

const height = 150;

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

const Content = styled.div`
  padding-top: ${height + 10}px;
  max-width: 900px;
  margin: 20px auto;
`

const ChecklistComponent = () => {
  return (
    <Checklist questionnaireId={'chronic_conditions'} />
  )
}

export const DashboardPage = ({match}) => {

  return (
    <>
      <Topbar>
        <LogoWrapper>
          <Link to="/">
            <LogoImg src={Logo} />
          </Link>
        </LogoWrapper>

        <Navigation>
          <List>
            <StyledLink isActive={match.path === '/dashboard/checklist'} to="/dashboard/checklist">Checklist</StyledLink>
          </List>
          <List>
            <StyledLink isActive={match.path === '/dashboard/info'} to="/dashboard/info">Info</StyledLink>
          </List>
        </Navigation>
      </Topbar>
      <Content>
        <Router>
          <Switch>
            <Route exact path='/dashboard/checklist' component={ChecklistComponent} />
            <Route exact path='/dashboard' component={ChecklistComponent} />
            </Switch>
        </Router>
      </Content>
    </>
  )
}