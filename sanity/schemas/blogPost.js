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
            name: 'author',
            title: 'Author',
            type: 'string'
        },
        {
            name: 'publishDate',
            title: 'Publish Data',
            type: 'date'
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
            name: 'coverImage',
            title: 'Cover Image',
            type: 'image'
        },
        {
            name: 'bodyText',
            title: 'Body Text',
            type: 'array', 
            of: [{type: 'block'}, {type: 'image'}]
        },
       
    ]
}