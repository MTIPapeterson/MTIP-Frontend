export default {
    name: 'homepage',
    title: 'Homepage',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string'
        },
        {
            name: 'hero',
            title: 'Hero',
            type: 'document',
            fields: [
                {
                    name: 'header',
                    title: 'Header',
                    type: 'string'
                },
                {
                    name: 'description',
                    title: 'Description',
                    type: 'text'
                },
                {
                    name: 'buttonLink',
                    title: 'Button Link',
                    type: "string",
                    description: 'The page route of an existing page. Routes begin with "/" followed by page name, for example "/resources/pageName". The route can be found in address bar after the main URL.',
                    validation: rule => rule.required().custom(value => {                    
                        if (value.includes(' ')) {
                          return 'This field cannot contain spaces.'
                        }
                        return true
                      })
                },
                {
                    name: 'heroImage',
                    title: 'Hero Image',
                    type: 'image'
                }
            ]
        },
        {
            name: 'secondaryInfo',
            title: 'Secondary Info',
            type: 'document',
            fields : [
                {
                    name: 'header',
                    title: 'Header',
                    type: 'string',
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
                }
            ]
        },
        {
            name: 'actionLinks',
            title: 'Action Links',
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
                            name: 'page',
                            title: 'Page',
                            type: 'string',
                            description: 'The page route of an existing page. Routes begin with "/" followed by page name, for example "/resources/pageName". The route can be found in address bar after the main URL.',
                            validation: rule => rule.required().custom(value => {                    
                                if (value.includes(' ')) {
                                  return 'This field cannot contain spaces.'
                                }
                                return true
                              })
                        }
                    ]
                }
            ]
        },
        {
            name: 'resourceLinks',
            title: 'Resource Links',
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
                            name: 'page',
                            title: 'Page',
                            type: 'string',
                            description: 'The page route of an existing page. Routes begin with "/" followed by page name, for example "/resources/pageName". The route can be found in address bar after the main URL.',
                            validation: rule => rule.required().custom(value => {                    
                                if (value.includes(' ')) {
                                  return 'This field cannot contain spaces.'
                                }
                                return true
                              })
                        }
                    ]
                }
            ]
        },
        {
            name: "quotesList",
            title: "Quotes List",
            type: "document",
            fields:[
                {
                    name: 'header',
                    title: 'Header',
                    type: 'string'
                },
                {
                    name: 'quotes',
                    title: 'Quotes',
                    type: 'array',
                    of: [
                        {
                            type: 'object',
                            fields: [
                                {
                                    name: 'author',
                                    title: 'Author',
                                    type: 'string'
                                },
                                {
                                    name: 'company',
                                    title: 'Company',
                                    type: 'string',
                                },
                                {
                                    name: 'quote',
                                    title: 'Quote',
                                    type: 'text'
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            name: 'settings',
            title: "Settings",
            type: 'document',
            fields: [
                {
                    name: 'showLatestEvent',
                    title: 'Show Latest Event?',
                    type: 'boolean'
                }
            ]
        }

    ]

}