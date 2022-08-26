import axios from "axios";

export const fetchArticles = (sort_by, order_by) => {
  if (!sort_by && !order_by) {
    return fetch(`https://nc-news-app-issy.herokuapp.com/api/articles`).then(
      (res) => {
        return res.json();
      }
    );
  } else if (sort_by && !order_by) {
    return fetch(
      `https://nc-news-app-issy.herokuapp.com/api/articles?sort_by=${sort_by}`
    ).then((res) => {
      return res.json();
    });
  } else if (sort_by && order_by) {
    return fetch(
      `https://nc-news-app-issy.herokuapp.com/api/articles?sort_by=${sort_by}&order_by=${order_by}`
    ).then((res) => {
      return res.json();
    });
  } else if (!sort_by && order_by) {
    return fetch(
      `https://nc-news-app-issy.herokuapp.com/api/articles?order_by=${order_by}`
    ).then((res) => {
      return res.json();
    });
  }
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

export const fetchAllArticlesByTopics = (topic, sort_by, order_by) => {
  if (!sort_by && !order_by) {
    return fetch(
      `https://nc-news-app-issy.herokuapp.com/api/articles?topic=${topic}`
    ).then((res) => {
      return res.json();
    });
  } else if (sort_by && !order_by) {
    return fetch(
      `https://nc-news-app-issy.herokuapp.com/api/articles?topic=${topic}&sort_by=${sort_by}`
    ).then((res) => {
      return res.json();
    });
  } else if (sort_by && order_by) {
    return fetch(
      `https://nc-news-app-issy.herokuapp.com/api/articles?topic=${topic}&sort_by=${sort_by}&order_by=${order_by}`
    ).then((res) => {
      return res.json();
    });
  } else if (!sort_by && order_by) {
    return fetch(
      `https://nc-news-app-issy.herokuapp.com/api/articles?topic=${topic}&order_by=${order_by}`
    ).then((res) => {
      return res.json();
    });
  }
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

export const fetchUsers = () => {
  return axios.get("https://nc-news-app-issy.herokuapp.com/api/users");
};

export const removeComment = (comment_id) => {
  return axios.delete(
    `https://nc-news-app-issy.herokuapp.com/api/comments/${comment_id}`
  );
};
