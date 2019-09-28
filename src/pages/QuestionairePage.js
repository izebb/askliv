import React from 'react'
import styled from 'styled-components'
import Modal, { ModalSection, ModalHeader } from '@kiwicom/orbit-components/lib/Modal'
import { Link } from 'react-router-dom'
import InputField from '@kiwicom/orbit-components/lib/InputField'

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
import { Questions } from '../components/Questions'
import { Layout } from '../components/Layout'
import Button from '@kiwicom/orbit-components/lib/Button'

const Image = styled.img`
  width: 150px;
`

const Content = styled.div`
  margin-top: 50px;
`

const Container = styled.div`
  padding: 20px 100px;
`
const Heading = styled.h2`
  font-weight: 600;
`

const InputWrapper = styled.div`
  margin-bottom: 20px;
  margin-right: 10px;
  max-width: 250px;
  width: 100%;
`
const PasswordWrapper = styled.div`
  margin-top: 20px;
`
const Title = styled(ModalHeader)`
  padding: 0;
`
export const QuestionairePage = () => {
  const [open, setOpen] = React.useState(true)
  return (
    <Layout>
      {open && (
        <Modal onClose={() => setOpen(false)}>
          <ModalHeader>Login</ModalHeader>
          <ModalSection>
            <form>
              <InputWrapper>
                <InputField name="firstName" placeholder="First name" />
              </InputWrapper>
              <InputWrapper>
                <InputField name="lastName" placeholder="Last name" />
              </InputWrapper>
              <InputWrapper>
                <InputField name="email" type="email" placeholder="Email" />
              </InputWrapper>
              <InputWrapper>
                <InputField name="password" type="password" placeholder="Password" />
              </InputWrapper>
              <Button>Sign up</Button>
              <PasswordWrapper>
                Already have an account? <Link path="/login">Login</Link>
              </PasswordWrapper>
            </form>
          </ModalSection>
        </Modal>
      )}
      <Questions />
    </Layout>
  )
}
