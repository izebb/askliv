import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import { useTransition, animated, config } from 'react-spring'

import logo from '../assets/white_logo.png'
import { DestinationsSearch } from '../components/DestinationsSearch'

const Container = styled.div`
  padding: 20px 100px;
`

const Image = styled.img`
  width: 110px;
`

const Content = styled.div`
  position: relative;
  z-index: 2;
`

const BackgroundImages = styled(animated.div)`
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 1;
  background-blend-mode: darken;
  background-size: cover;
  background: url('https://images.unsplash.com/photo-1504634203593-d7967426d7f8?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80')
    no-repeat center fixed;
`

const slides = [
  { id: 0, url: 'photo-1545832063-74f2d924b61a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1901&q=80i' },
  { id: 1, url: 'photo-1544572571-ab94fd872ce4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1901&q=80i' },
  { id: 2, url: 'photo-1540206395-68808572332f?ixlib=rb-1.2.1&w=1901&q=80i' }
]

const Background = () => {
    const [index, set] = useState(0)
  const transitions = useTransition(slides[index], item => item.id, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: config.molasses
  })

  useEffect(() => void setInterval(() => set(state => (state + 1) % 3), 2000), [])

  return transitions.map(({ item, props, key }) => (
    <BackgroundImages
      key={key}
      class="bg"
      style={{ ...props, backgroundImage: `url(https://images.unsplash.com/${item.url}&auto=format&fit=crop)` }}
    />
  ))
}

export const HomePage = () => {
  return (
    <Container>
      <Background />
      <Content>
        <Image src={logo} />
        <DestinationsSearch />
      </Content>
    </Container>
  )
}
