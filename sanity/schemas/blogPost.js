export default {
    name: 'blogPost',
    title: 'Blog Post',
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
            name: 'bodyText',
            title: 'Body Text',
            type: 'array', 
            of: [{type: 'block'}, {type: 'image'}]
        },
        {
            name: 'coverImage',
            title: 'Cover Image',
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