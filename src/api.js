export const fetchArticles = () => {
  return fetch("https://nc-news-app-issy.herokuapp.com/api/articles").then(
    (res) => {
      return res.json();
    }
  );
};

export const fetchAllTopics = () => {
  return fetch("https://nc-news-app-issy.herokuapp.com/api/topics").then(
    (res) => {
      return res.json();
    }
  );
};

export const fetchAllArticlesByTopics = (topic) => {
  return fetch(
    `https://nc-news-app-issy.herokuapp.com/api/articles?topic=${topic}`
  ).then((res) => {
    return res.json();
  });
};
