export default {
    name: 'settings',
    title: 'Settings',
    type: 'document',
    description: 'Only the first document will be used by the site.',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string'
        },
        {
            name: 'logo',
            title: 'Logo',
            type: 'image'
        },
        {
            name: 'address',
            title: 'Address',
            type: 'text'
        },
        {
            name: 'phoneNumber',
            title: 'Phone Number',
            type: 'string'
        },
        {
            name: 'privacyPolicy',
            title: 'Privacy Policy',
            type: 'text'
        },
        {
            name: 'socialMediaLinks',
            title: 'Social Media Links',
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
        {
            name: 'partnerLinks',
            title: 'Partner Links',
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