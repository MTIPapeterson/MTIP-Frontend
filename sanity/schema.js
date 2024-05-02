import homepage from "./schemas/homepage"
import about from "./schemas/about"
import events from "./schemas/events"
import resources from "./schemas/resources"
import guides from "./schemas/guides"
import settings from "./schemas/settings"
import blogPost from "./schemas/blogPost"
import learningResource from "./schemas/learningResource"

export const schema = {
  types: [homepage, about, events, resources, guides, settings, blogPost, learningResource],
}
