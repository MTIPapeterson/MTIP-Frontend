export default {
    name: 'events',
    title: 'Events',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string'
        },
        {
            name: 'date',
            title: 'Event Date',
            type: 'date',
            options: {
                dateFormat: 'dddd-MMMM-Do-YYYY'
            }
        },
        {
            name: 'description',
            title: 'Description',
            type: 'text'
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image'
        },
        {
            name: 'link',
            title: 'External Link',
            type: 'url'
        }
    ]
}