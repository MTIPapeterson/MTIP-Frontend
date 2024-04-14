export default {
    name: 'resources',
    title: 'Resources',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string'
        },
        {
            name: 'bodyText',
            title: 'Body Text',
            type: 'array', 
            of: [{type: 'block'}]
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image'
        },
        {
            name: 'documents',
            title: 'Documents',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        {
                            name: 'name',
                            title: 'Name',
                            type: 'string'
                        },
                        {
                            name: 'file',
                            title: 'File',
                            type: 'file',
                            validation: rule => rule.required()
                        }
                    ]
                }
            ]
        },
        {
            name: 'links',
            title: 'External Links',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        {
                            name: 'name',
                            title: 'Name',
                            type: 'string'
                        },
                        {
                            name: 'url',
                            title: 'Url',
                            type: 'url',
                            validation: rule => rule.required()
                        }
                    ]
                }
            ]
        },
    ]
}