export const fetchArticles = () => {
  return fetch("https://nc-news-app-issy.herokuapp.com/api/articles").then(
    (res) => {
      return res.json();
    }
  );
};
