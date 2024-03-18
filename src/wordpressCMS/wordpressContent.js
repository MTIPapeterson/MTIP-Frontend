const fetchWPContent = (QUERY, setData) => {
    let data = null

    const wpContent = fetch(process.env.NEXT_PUBLIC_WORDPRESS_GRAPHQL_ENDPOINT, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query: QUERY }),
      })
      .then((res) => res.json())
      .then((result) => setData(result))
      .catch(() => {
        console.error("could not find data");
      })
}

const getWPContent = (page, setData) => {
    const pages = {
       "home" : HOME_QUERY,
       "resourceLinks" : RESOURCES_PAGE_LINKS,
       "resourcePage" : RESOURCES_PAGE_CONTENT
    }
    fetchWPContent(pages[page], setData)
}

export {getWPContent}

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
            altText
            fileSize(size: LARGE)
            uri
          }
        }
      }
      title
    }
  }
}
`