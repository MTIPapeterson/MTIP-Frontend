export default {
    name: 'about',
    title: 'About',
    type: 'document',
    description: 'Only the first document will be used by the site.',
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