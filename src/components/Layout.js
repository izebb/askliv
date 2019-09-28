import React from 'react'
import styled from 'styled-components'
import Logo from '../assets/purple_logo.png'

import {Link} from 'react-router-dom';

const width = 350;
const Heading = styled.h2`
  font-weight: 600;
  margin-bottom: 40px;
`

const SideBar = styled.div`
  position: fixed;
  height: 100%;
  width: 45%;
  top: 0;
  right: 0;
  background-color: #200080;
  background: url('https://images.unsplash.com/photo-1553962949-b4c63c45337c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2734&q=80')  
  no-repeat fixed ;
  background-position: center;
  background-size: cover;

  padding: 50px 20px 20px 20px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
`
const Image = styled.img`
  width: 110px;
  position: relative;
  z-index: 2;
  margin-bottom: 70px;
`
const Backdrop = styled.div`
    position: absolute;
    z-index: 1;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.3);
    left: 0;
    top: 0;
`

const Container = styled.div`
    width: 55%;
    max-width: 960px;
    padding-right: 60px;
`

const Content = styled.div`
    padding: 40px;
`

export const Layout = ({ children, title }) => {
  return (
      <>
    <Container>
      <Content>
        <Link to="/">
          <Image src={Logo} />
        </Link>
          {title  && <Heading>{title}</Heading>}
        {children}
      </Content>
    </Container>
     <SideBar>
        <Backdrop />
    </SideBar>
   </>
  )
}
