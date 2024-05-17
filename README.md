## This website uses

Next JS 14 with the app router: [documentation](https://nextjs.org/docs)

Sanity IO as a headless CMS: [documentation](https://www.sanity.io/docs/reference)

Sanity's query language, GROQ: [documentation](https://www.sanity.io/docs/query-cheat-sheet)

Tailwind CSS for styling components: [documentation](https://tailwindcss.com/docs/installation)

## Workflow for creating a new page

#### create sanity schema:
sanity makes it easy to create custom page schemas that appear in [sanity studio](https://www.sanity.io/docs/sanity-studio). 

1. To create a new [schema](https://www.sanity.io/docs/schema-types) create a file in ```/sanity/schemas``` containing a json table in the correct format. 
2. Import and add to the types array in ```/sanity/schema.js```. The schema and its fields will now appear in sanity studio.
3. We then need to query and get this content from sanity using [GROQ](https://www.sanity.io/docs/query-cheat-sheet).
4. In ```/sanity/sanit-utils.js``` create the appropriate query for your schema (examples can be found in the file) and add the constant to the 'contentQueries' dictionary. 
5. Next js makes it easy to fetch to content from sanity. Simply add the ```getContent(pageName)``` function to any async component and pass in the query key add to the contentQueries dictionary. 

##### heres and example:

```
export default async function Page(){
    const sanityData = await getContent('pageName')

    return (
    <div>
    <h1>{sanityData.title}</h1>
    </div>
    )
}
```

