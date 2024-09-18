import { groq } from "next-sanity";
import client from "./lib/client"

export async function getContent (query) {
    return client.fetch(
        contentQueries[query],
        {},
        {
            cache: 'no-cache'
        }
    )
}

export async function getDynamicContent (type, slug) {
    return client.fetch(
        groq`*[_type == "${type}" && pageName.current == "${slug}"][0]{
            title,
            bodyText,
            "image": image.asset->url,
            documents,
            links,
            "files": documents[]{
                "url": file.asset->url,
                name
            }
        }`,
        {},
        {
            cache: 'no-cache'
        }
    )
}

export async function getBlogPost (slug) {
    return client.fetch(
        groq`*[_type == "blogPost" && pageName.current == "${slug}"][0]{
            title,
            bodyText,
            "image": coverImage.asset->url,
            author,
            publishDate,
        }`,
        {},
        {
            cache: 'no-cache'
        }
    )
}


export async function getLearningResource (slug) {
    return client.fetch(
        groq`*[_type == "learningResources" && pageName.current == "${slug}"][0]{
            title,
            stepHeader,
            "steps": steps[]{
                header,
                bodyText,
                "documents": documents[]{
                    "url": file.asset->url,
                    name
                },
                links
            }
        }`,
        {},
        {
            cache: 'no-cache'
        }
    )
}

export function formatDate(dateString) {
    // Create a date object adjusted to avoid time zone offset issues
    const parts = dateString.split('-');
    const date = new Date(parts[0], parts[1] - 1, parts[2]);

    // Define options for DateTimeFormat
    const options = {
        weekday: 'short',  // abbreviated day of week
        month: 'short',    // abbreviated month
        day: '2-digit',    // two-digit day
        year: 'numeric'    // full year
    };

    // Format the date
    const formattedDate = new Intl.DateTimeFormat('en-US', options).format(date);

    // Adding the ordinal suffix to day
    const day = date.getDate();
    const suffix = ['th', 'st', 'nd', 'rd'][
        (day % 10 > 3) ? 0 : (day % 100 - day % 10 != 10) * day % 10
    ];

    return formattedDate.replace(/(\d+)(,)/, `$1$2`);
}

const BLOGS =  groq`*[_type == "blogPost"] | order(_createdAt desc) {
    title,
    "image": coverImage.asset->url,
    author,
    publishDate,
    bodyText,
    "pageName": pageName.current
}`

const HOMEPAGE = groq`*[_type == "homepage"][0]{
    title,
    hero,
    "heroImage": hero.heroImage.asset->url,
    secondaryInfo,
    "secondaryImage": secondaryInfo.image.asset->url,
    actionLinkList,
    resourceLinkList,
    quotesList,
    settings,
    "partnerLinks": partnerLinks[]{
        "logo": logo.asset->url,
        name,
        url
    }
}
`
const ABOUT = groq`*[_type == "about"][0]{
    title,
    bodyText,
    "image": image.asset->url,
}
`

const EVENTS = groq`*[_type == "events"]{
    title,
    date,
    description,
    "image": image.asset->url,
    link
}
`

const GUIDES = groq`*[_type == "guides"]{
    title,
    bodyText,
    "image": image.asset->url
}
`
const RESOURCES = groq`*[_type == "resources"]{
    title,
    "image": image.asset->url,
    "pageName": "/resources/" + pageName.current
}
`

const SETTINGS = groq`*[_type == "settings"][0]{
    title,
    "logo": logo.asset->url,
    director,
    building,
    address,
    poBox,
    cityStateZip,
    phoneNumber,
    email,
    privacyPolicy,
    socialMediaLinks,
    "partnerLinks": partnerLinks[]{
        "logo": logo.asset->url,
        name,
        url
    }
}
`

const LEARNING_RESOURCES = groq`*[_type == "learningResources"]{
    title,
    "pageName": "/guides/" + pageName.current
}
`

const contentQueries = {
    'homepage': HOMEPAGE,
    'about': ABOUT,
    'events': EVENTS,
    'guides': GUIDES,
    'resources': RESOURCES,
    'settings' : SETTINGS,
    'blogs': BLOGS,
    'learningResources': LEARNING_RESOURCES
}

const query = `
  *[_type == "post"]{
    title,
    "videoUrl": video.asset->url
  }
`;


