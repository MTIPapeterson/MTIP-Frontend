import { groq } from "next-sanity";
import client from "./lib/client"

export async function getContent () {
    return client.fetch(
        groq`*[_type == "homepage"][0]{
            title,
            hero,
            secondaryInfo,
            actionLinks,
            resourceLinks,
            quotesList,
            settings
        }
        `
    )
}