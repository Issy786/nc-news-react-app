# NC-News-App

https://the-awesome-issy786-site.netlify.app/

## Description

This App uses the backend API to provide news articles, comments on the related articles, votes and dates on related the articles, votes and dates on comments and finally a users page.

The App has a top nav bar and a bottom nav bar. the top nav bar has a article link to a list of all the available articles, a users link which lists all the available users you can choose from and finally the username and avatar of the current user. The bottom nav bar has all available article topic links which list all the articles related to that topic.

The App allows the user to open a article by clicking on a article tile. Users can also sort the list of the articles by 'clicking' on the sort by button on mobile version or 'hovering' over the sort by button on desktop version and chosing an option. Users can also order the articles by clicking on the top button to start from the top of their chosen sort option or by clicking on the bottom button to start from the bottom Each article has it's own page with the topic, author, date, amount of votes and all the comments made on the article. To up-vote or down-vote on a article, the user can just simply click on either the '+' or '-' icons. To post a comment, the user can just simply type their comment in the comment input area and click on the add button. Users can also delete their own and only their own comments by clicking on the delete button.

## Links to API

- https://nc-news-app-issy.herokuapp.com/api
- https://nc-news-app-issy.herokuapp.com/api/articles
- https://nc-news-app-issy.herokuapp.com/api/topics
- https://nc-news-app-issy.herokuapp.com/api/users
- https://nc-news-app-issy.herokuapp.com/api/articles?topic=coding (chosen articles by topic)
- https://nc-news-app-issy.herokuapp.com/api/articles?sort_by=title (chosen sort option for articles list)
- https://nc-news-app-issy.herokuapp.com/api/articles?order_by=ASC
  (chosen articles order for articles list - ASC for asscending and DESC for descending)
- https://nc-news-app-issy.herokuapp.com/api/articles/1 (chosen article by it's id)
- https://nc-news-app-issy.herokuapp.com/api/articles/1/comments (comments on the related article)

## Node version

The minimum required version of Node to run this project is:

- Node: v18.3.0

## How to use

### Clone this repo

in the terminal run the following command:

`git clone https://github.com/Issy786/nc-news-react-app.git`

### Installation

To run the App please install the following packages:

#### **Axios:**

`npm install axios`

#### **react-router-dom:**

`npm i react-router-dom`

### Run the App locally

to run the app locally, run the following command:

`npm start`
