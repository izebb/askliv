import React from 'react'
import styled from 'styled-components'
import { DateRangePicker } from 'react-dates'
import CreatableSelect from 'react-select/creatable'
import {withRouter} from 'react-router-dom'

import InputField from '@kiwicom/orbit-components/lib/InputField'
import Button from '@kiwicom/orbit-components/lib/Button'
import 'react-dates/lib/css/_datepicker.css'
import 'react-dates/initialize'
import { SearchContext } from '../context/SearchContext'
import moment from 'moment'

const Container = styled.div`
  background-color: #fff;
  width: 100%;
  max-width: 500px;
  padding: 20px 50px 40px 50px;
  border-radius: 5px;
  box-sizing: border-box;
  flex-direction: column;
  margin-top: 100px;

  .DateRangePicker {
    width: 100%;
  }

  .DateRangePickerInput__withBorder {
    width: 100%;
  }

  .DateRangePickerInput__withBorder {
    border-radius: 5px;
  }

  .DateInput {
    background-color: transparent;
    border-bottom: none;
    width: 40%;
  }
  .DateInput_input__focused {
    background: transparent;
    border: none;
  }

  .DateInput_input {
    height: 44px;
    background-color: transparent;
    padding: 0 15px;
    font-size: inherit;
    font-weight: 400;
  }
`
const InputWrapper = styled.div`
  margin-bottom: 20px;
  margin-right: 10px;
  width: 100%;
`

const DateWrapper = styled(InputWrapper)`
  max-width: 100%;
`
const Caption = styled.h2`
  margin-bottom: 10px;
  margin-bottom: 40px;
`

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const options = [
  { value: 'brasil', label: 'Brasil' },
  { value: 'south_africa', label: 'South africa' },
  { value: 'malaysia', label: 'Malaysia' }
]

export const DestinationsSearch = withRouter(({history}) => {
  const context = React.useContext(SearchContext);
  const [date, setDate] = React.useState(context.selectedDates)
  const [focusedInput, setFocusedInput] = React.useState()
  const [selectedOption, setSelectedOption] = React.useState(context.selectedOption)

  const handleSearch = () => {
    history.push('categories')
    context.onSearch(selectedOption, date)
  }

  return (
    <Container>
      <Caption>Enter your destination</Caption>
      <FormWrapper>
        <InputWrapper>
          <CreatableSelect
            isClearable
            value={selectedOption}
            options={options}
            onChange={item => setSelectedOption(item)}
            placeholder="Choose your destination - malaysia, kenya"
          />
        </InputWrapper>

        <DateWrapper>
          <DateRangePicker
            startDate={moment(date.startDate)}
            endDate={moment(date.endDate)}
            focusedInput={focusedInput}
            onFocusChange={focusedInput => setFocusedInput(focusedInput)}
            startDateId="start_date"
            endDateId="end_date"
            onDatesChange={({ startDate, endDate }) => setDate({ startDate, endDate })}
          />
        </DateWrapper>
        <Button onClick={() => handleSearch()}>Search</Button>
      </FormWrapper>
    </Container>
  )
})
