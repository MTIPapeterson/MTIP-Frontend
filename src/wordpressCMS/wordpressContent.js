const fetchWPContent = async (QUERY) => {
    const res = await fetch(process.env.NEXT_PUBLIC_WORDPRESS_GRAPHQL_ENDPOINT, {
        cache: 'no-store',
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query: QUERY }),
      })
    
    return await res.json()
}

const getWPContent = (page) => {
    const pages = {
       "home" : HOME_QUERY,
       "resourceLinks" : RESOURCES_PAGE_LINKS,
       "resourcePage" : RESOURCES_PAGE_CONTENT,
       "about" : ABOUT_CONTACT,
       "docs": DOC_CONTENT,
       "events": EVENTS
    }
    return fetchWPContent(pages[page])
}


//---------------QUERIES-------------------//

const HOME_QUERY = `
query homePage {
  home {
    nodes {
      homeContent {
        actionLinksTitle
        fieldGroupName
        heroButtonLink
        heroDescription
        home
        scondaryInformation
        scondaryInformationDescription
        heroImage {
          node {
            altText
            mediaItemUrl
          }
        }
      }
    }
  }

  homeLinks {
    nodes {
      homeLinkContent {
        name
        page
        makeWideLink
      }
    }
  }

  quotes {
    nodes {
      quoteContent {
        author
        company
        quote
      }
    }
  }
}
`

const RESOURCES_PAGE_LINKS = `
query resourcePageLinks {
  resourcePages {
    nodes {
      resourcePageContent {
        pageName
      }
      title
    }
  }
}
`

const RESOURCES_PAGE_CONTENT = `
query NewQuery {
  resourcePages {
    nodes {
      resourcePageContent {
        pageName
        content
        file {
          node {
            title
            altText
            fileSize(size: LARGE)
            mediaItemUrl
          }
        }
      }
      title
    }
  }
}
`

const ABOUT_CONTACT = `
query NewQuery {
  aboutContacts {
    nodes {
      aboutContactContent {
        adress
        email
        contanctImage {
          node {
            mediaItemUrl
            altText
          }
        }
        aboutImage {
          node {
            altText
            mediaItemUrl
          }
        }
        phone
        programDirector
        about
      }
    }
  }
}`

const DOC_CONTENT = `
query NewQuery {
  documentResources {
    nodes {
      doccontent {
        name
        contentDescription
      }
    }
  }
}
`

const EVENTS = `
query NewQuery {
  events {
    nodes {
      eventContent {
        date
        description
        eventName
        link
        image {
          node {
            mediaItemUrl
            altText
          }
        }
      }
    }
  }
}`

export {getWPContent}