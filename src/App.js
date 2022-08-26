import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { ArticlesProvider } from "./components/articles-provider";
import { BottomNav } from "./components/bottom-nav";
import { SingleArticle } from "./components/single-article";

import { TopicProvider } from "./components/topic-provider";
import { ChangeUser } from "./components/users";
import { UserContext } from "./components/user";
import { TopNav } from "./top-nav";

function App() {
  const [loggedInUser, setLoggedInUser] = useState({
    username: "tickle122",
    name: "Tom Tickle",
    avatar_url:
      "https://vignette.wikia.nocookie.net/mrmen/images/d/d6/Mr-Tickle-9a.png/revision/latest?cb=20180127221953",
  });

  return (
    <BrowserRouter>
      <UserContext.Provider value={{ loggedInUser, setLoggedInUser }}>
        <div className="App">
          <header>
            NC <span className="title-split">News</span>
          </header>
          <TopNav />
          <BottomNav />
          <Routes>
            <Route path="/" element={<ArticlesProvider />} />
            <Route path="/articles/:topic" element={<TopicProvider />} />
            <Route path="/article/:article_id" element={<SingleArticle />} />
            <Route path="/change_user" element={<ChangeUser />} />
          </Routes>
        </div>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
