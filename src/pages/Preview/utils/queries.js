export const authorCollectionQuery = `{
  authorCollection {
    items {
      title
      picture {
        title
        fileName
      }
      text
      sys {
        id
      }
    }
  }
}`