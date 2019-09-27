import React from 'react'
import styled from 'styled-components';

import logo from '../assets/white_logo.png'
import { DestinationsSearch } from '../components/DestinationsSearch'


const Container  = styled.div`
padding: 20px 100px;
`;

const Image = styled.img`
    width: 150px;
`;

const Content = styled.div`
    position: relative;
    z-index: 2;
`;

const BackgroundImages = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 1;
    background-image: url(https://images.unsplash.com/photo-1504634203593-d7967426d7f8?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80);
`;

export const HomePage = () => {
  return (
    <Container>
      <BackgroundImages />
      <Content>
          <Image src={logo} />
        <DestinationsSearch />
      </Content>
    </Container>
  )
}
