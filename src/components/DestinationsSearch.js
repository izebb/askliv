import React from 'react'
import styled from 'styled-components'
import { DateRangePicker } from 'react-dates'
import InputField from '@kiwicom/orbit-components/lib/InputField'
import Button from "@kiwicom/orbit-components/lib/Button";
import 'react-dates/lib/css/_datepicker.css'
import 'react-dates/initialize'

const Container = styled.div`
  background-color: #fff;
  width: 100%;
  max-width: 100%;
  margin: 0 auto;
  padding: 20px 50px;
  border-radius: 5px;
  box-sizing: border-box;
  flex-direction: row;
  margin-top: 180px;

   .DateRangePickerInput__withBorder {
      border-radius: 5px;
  }

  .DateInput {
    background-color: transparent;
    border-bottom: none;
  }
  .DateInput_input__focused {
      background: transparent;
      border: none;
  }

   .DateInput_input {
    height: 44px;

    padding: 0 15px;
    font-size: inherit;
    font-weight: 400;
  }

`
const InputWrapper = styled.div`
  margin-bottom: 20px;
  margin-right: 10px;
  max-width: 250px;
  width: 100%;
`

const DateWrapper = styled(InputWrapper)`
  max-width: 100%;
`


const Caption  = styled.h1`
    margin-bottom: 10px;     
    margin-bottom: 40px;     
`;

const FormWrapper = styled.div`
  display: flex;
`

export const DestinationsSearch = () => {
  const [date, setDate] = React.useState({})
  const [focusedInput, setFocusedInput] = React.useState()

  return (
    <Container>
      <Caption>Ask Liv about going to</Caption>
      <FormWrapper>
        <InputWrapper>
          <InputField name="from" placeholder="From" />
        </InputWrapper>

        <InputWrapper>
          <InputField name="to" placeholder="To" />
        </InputWrapper>

        <DateWrapper    >
          <DateRangePicker
            startDate={date.startDate}
            endDate={date.endDate}
            focusedInput={focusedInput}
            onFocusChange={focusedInput => setFocusedInput(focusedInput)}
            startDateId="start_date"
            endDateId="end_date"
            onDatesChange={({ startDate, endDate }) => setDate({ startDate, endDate })}
          />
        </DateWrapper>
        <Button>Search</Button>
      </FormWrapper>
    </Container>
  )
}
