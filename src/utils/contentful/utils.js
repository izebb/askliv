import { some } from 'lodash'

import { client } from './client'
import { serializeAllEntries } from './serializers'

export const getContentfulResponse = async () => {
    try{
        return await client.getEntries()
    }catch(err) {
        console.error(err)
    }

    return []
}

export const getAllEntries = async () => {
    const entries = await getContentfulResponse()
    return serializeAllEntries(entries)
}

export const getAllSearchCategories = (entries) => {
    return entries.filter(entry => {
        return entry.contentType === 'searchCategories'
    }).map(entry => {
        return entry.fields.name
    })
}

export const getAllQuestionnaires = (entries) => {
    return entries.filter(entry => {
        return entry.contentType === 'questionnaire'
    })
}

export const getQuestionnaire = (entries, catgegoryId) => {
    const questionnaire = getAllQuestionnaires(entries).filter(questionnaire => {
        return questionnaire.fields.name === catgegoryId
    })[0]

    const serializedQuestionnaire = 
        some(questionnaire) &&
        questionnaire.fields.question.map(question => {
        const qString = question.fields.question
        const answers = question.fields.answers
        return {
            'question': qString,
            'answers': answers
        }
    })
    return serializedQuestionnaire
}