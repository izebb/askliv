import React from 'react'
import styled from 'styled-components'
import {withRouter} from 'react-router-dom'
import Modal, { ModalSection, ModalHeader, ModalFooter } from '@kiwicom/orbit-components/lib/Modal'
import Alert from '@kiwicom/orbit-components/lib/icons/Alert'

import { ButtonNext } from './ButtonNext'
import { ButtonClose } from './ButtonClose'

const DONT_TRAVEL_WARNING = `Based on your condition, we strongly advise you not to travel to Malaysia. Please reachout to our travel expert for more information. Still want to travel? Hit Next.`

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`

const StyledModalSelection = styled(ModalSection)`
  display: flex;
  align-items: center;
  text-align: center;
`

const StyledAlert = styled(Alert)`
  width: 70px;
  height: 70px;
  margin: 0 auto;
`

export const NoTravelModal = withRouter(props => {
  return (
    <Modal>
      <ModalHeader>
        <StyledAlert color="critical" />
      </ModalHeader>

      <StyledModalSelection>{DONT_TRAVEL_WARNING}</StyledModalSelection>
      <ModalFooter>
      <ButtonWrapper>
        <ButtonClose onClick={props.setIsModalOpen}>Close</ButtonClose>
        <ButtonNext onClick={() => props.history.push('/dashboard/checklist')}>Next</ButtonNext>
      </ButtonWrapper>
      </ModalFooter>
    </Modal>
  )
})
