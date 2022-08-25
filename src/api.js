import axios from "axios";

export const fetchArticles = () => {
  return fetch("https://nc-news-app-issy.herokuapp.com/api/articles").then(
    (res) => {
      return res.json();
    }
  );
};

export const fetchArticleById = (article_id) => {
  return fetch(
    `https://nc-news-app-issy.herokuapp.com/api/articles/${article_id}`
  ).then((res) => {
    return res.json();
  });
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

export const patchArticle = (article_id) => {
  return axios.patch(
    `https://nc-news-app-issy.herokuapp.com/api/articles/${article_id}`,
    { inc_votes: 1 }
  );
};

export const fetchAllCommentsByArticleId = (article_id) => {
  return axios.get(
    `https://nc-news-app-issy.herokuapp.com/api/articles/${article_id}/comments`
  );
};

export const postNewComment = (article_id, user, newComment) => {
  return axios.post(
    `https://nc-news-app-issy.herokuapp.com/api/articles/${article_id}/comments`,
    {
      username: user,
      body: newComment,
    }
  );
};
