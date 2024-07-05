const MAIN_URL = `https://graphql.contentful.com/content/v1/spaces/${process.env.REACT_APP_SPACE_ID}`;

export const request = async (query) => {
  try {
    const result = await fetch(MAIN_URL, {
      method: "POST",
      headers: {
        Content_type: "application/json",
        Authorization: `Bearer ${process.env.REACT_APP_ACCESS_TOKEN}`,
      },
      body: JSON.stringify({ query }),
    });

    const { data } = await result.json();

    return data;
  } catch (err) {
    console.log(err);
  }
};
