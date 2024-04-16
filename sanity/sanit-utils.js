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


const HOMEPAGE = groq`*[_type == "homepage"][0]{
    title,
    hero,
    secondaryInfo,
    actionLinks,
    resourceLinks,
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
`
const RESOURCES = groq`*[_type == "resources"]{
    title,
    bodyText,
    "image": image.asset->url,
    documents,
    links
}
`

const SETTINGS = groq`*[_type == "settings"][0]{
    title,
    logo,
    address,
    phoneNumber,
    privacyPolicy,
    socialMediaLinks,
    partnerLinks
}
`

const contentQueries = {
    'homepage': HOMEPAGE,
    'about': ABOUT,
    'events': EVENTS,
    'guides': GUIDES,
    'resources': RESOURCES,
    'settings' : SETTINGS,
}

