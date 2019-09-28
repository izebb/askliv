import React from 'react'
import styled from 'styled-components'
import { some } from 'lodash'

import { Accordion } from './Accordion'
import { getAllEntries, getAllChecklistEntries } from '../utils/contentful/utils'

const H1 = styled.h1`
  font-weight: 300;
  text-align: center;
  margin-bottom: 50px;
`

const TripDate = styled.div`
  font-weight: 300;
  text-align: center;
  margin-bottom: 50px;
`

export const Checklist = (props) => {
    const [entries, setEntries] = React.useState([])
    React.useEffect(() => {
        getAllEntries()
            .then((response) => {
                setEntries(response)
            })
    }, [])
    const allBlocs = getAllChecklistEntries(entries, props.questionnaireId) 

    const blocsElements = 
        some(allBlocs) &&
        allBlocs.map(bloc => {
            return <Accordion bloc={bloc}/>
        })

    return (
        <>
            <H1>Get Ready for your trip to Malaysia ✈️</H1>
            <TripDate>01.12.2019 - 21.12.2019</TripDate>
            {blocsElements}
        </>
    )
}
