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