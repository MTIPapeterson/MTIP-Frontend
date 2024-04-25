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
    settings
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
    "pageName": pageName.current
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

const contentQueries = {
    'homepage': HOMEPAGE,
    'about': ABOUT,
    'events': EVENTS,
    'guides': GUIDES,
    'resources': RESOURCES,
    'settings' : SETTINGS,
    'blogs': BLOGS,
}

