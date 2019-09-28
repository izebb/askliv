import { some } from 'lodash'

export const serializeAllEntries = (entries) => {
    
    const serializedEntries = 
        some(entries) &&
        entries.items.map(item => {
            const contentType = item.sys.contentType.sys.id
            const entryId = item.sys.id
            return {
                "contentType": contentType,
                "entryId": entryId,
                "fields": item.fields
            }
        })
    return serializedEntries
}

export const serializeBloc = (bloc) => {
    const body = bloc.fields.body.content.map(bodyItem => {
        if (bodyItem.nodeType === 'embedded-asset-block') {
            return bodyItem.data.target.fields.file.url
        }
        return bodyItem.content[0].value
    })

    return {
        'title': bloc.fields.title,
        'body': body,
        'important': bloc.fields.importance,
        'type': bloc.fields.type
    }
}