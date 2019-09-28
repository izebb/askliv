const contentful = require('contentful')

export const client = contentful.createClient({
    space: process.env.REACT_APP_CONTENTFUL_API_SPACE,
    environment: 'master', // defaults to 'master' if not set
    accessToken: process.env.REACT_APP_CONTENTFUL_API_TOKEN
})

