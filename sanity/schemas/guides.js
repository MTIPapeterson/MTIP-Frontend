export default {
    name: 'guides',
    title: 'Guides',
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
        }
    ]
}