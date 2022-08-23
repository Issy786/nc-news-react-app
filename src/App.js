import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "./App.css";
import { ArticlesProvider } from "./components/articles-provider";
import { BottomNav } from "./components/bottom-nav";
import { TopicProvider } from "./components/topic-provider";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header>
          NC <span className="title-split">News</span>
        </header>
        <nav className="top-nav">
          <span className="top-nav-links">
            <Link to="/">Articles</Link> <Link to="/topics">Users</Link> Current
            User
          </span>
        </nav>
        <BottomNav />
        <Routes>
          <Route path="/" element={<ArticlesProvider />} />
          <Route path="/articles/:topic" element={<TopicProvider />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
