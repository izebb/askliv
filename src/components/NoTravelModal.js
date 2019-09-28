import React from 'react'
import styled from 'styled-components'
import Modal, { ModalSection } from "@kiwicom/orbit-components/lib/Modal";
import Alert from "@kiwicom/orbit-components/lib/icons/Alert";

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
  width: 150px;
  height: 150px;

`


export const NoTravelModal = (props) => {
    return (
      <Modal>
        <StyledAlert color='critical' />
        <StyledModalSelection>
          {DONT_TRAVEL_WARNING}
        </StyledModalSelection>
        <ButtonWrapper>
            <ButtonClose onClick={props.setIsModalOpen}>Close</ButtonClose>
            <ButtonNext setIsModalOpen={props.setIsModalOpen}>Next</ButtonNext>
        </ButtonWrapper>
      </Modal>
    )
}
