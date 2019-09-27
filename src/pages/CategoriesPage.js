import React from 'react'
import styled from 'styled-components'

import LogoPurple from '../assets/purple_logo.png'

import Diabilities from '../assets/diabilities.svg'
import Allegies from '../assets/allegies.svg'
import Pregnancy from '../assets/pregnancy.svg'
import Chronic from '../assets/chronic.svg'
import TrustSafety from '../assets/trust-safety.svg'
import Information from '../assets/information.svg'
import Globe from '../assets/globe.svg'

import { DestinationsSearch } from '../components/DestinationsSearch'
import { Categories } from '../components/Categories'
import { Layout } from '../components/Layout'


const Container = styled.div`
  padding: 20px 100px;
`
const Heading = styled.h2`
  font-weight: 600;
`
export const CategoriesPage = () => {
  return (
    <Layout title="Select a category">
        <Categories  />
    </Layout>
  )
}
