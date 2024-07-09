export const authorCollectionQuery = `{
  authorCollection {
    items {
      title
      picture {
        title
        fileName
        url
      }
      text
      sys {
        id
      }
    }
  }
}`;

export const mediaCollectionQuery = `{
  mediaCollection {
    items {
      title
      picture {
        url
      }
      music {
        title
        fileName
        url
      }
      sys {
        id
      }
    }
  }
}`;
