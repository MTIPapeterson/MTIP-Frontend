export default {
    name: 'learningResources',
    title: 'Learning Resources',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string'
        },
        {
            name: 'pageName',
            title: 'Page Name',
            type: 'slug',
            options: {
                source: 'title'
            },
            validation: rule => rule.required(),
            description: 'The page route that appears at the end of the url. *Cannot Contain Spaces*'
        },
        {
            name: 'stepHeader',
            title: 'Step Header',
            type: 'string',
            description: 'If left blank this will default to `Steps`'
        },
        {
            name: 'steps',
            title: 'Steps',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        {
                            name: 'header',
                            title: 'Header',
                            type: 'string'
                        },
                        {
                            name: 'bodyText',
                            title: 'Body Text',
                            type: 'array', 
                            of: [{type: 'block'}, {type: 'image'}]
                        },
                    ]
                }
            ]

        }
    ]
}