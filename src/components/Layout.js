import React from 'react'
import styled from 'styled-components'
import Logo from '../assets/white_logo.png'

const width = 350;
const Heading = styled.h2`
  font-weight: 600;
  margin-bottom: 50px;
`

const SideBar = styled.div`
  position: fixed;
  height: 100%;
  width: ${width}px;
  top: 0;
  left: 0;
  background-color: purple;
  padding: 100px 20px 20px 20px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
`
const Image = styled.img`
  width: 150px;
`

const Container = styled.div`
    padding-left: ${width}px;
`

const Content = styled.div`
    padding: 40px;
`

export const Layout = ({ children, title }) => {
  return (
    <Container>
      <SideBar>
        <Image src={Logo} />
      </SideBar>
      <Content>
          {title  && <Heading>{title}</Heading>}
      {children}
      </Content>
    </Container>
  )
}
