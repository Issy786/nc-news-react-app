export const SortBy = ({ setSearchParams }) => {
  return (
    <div className="dropdown">
      <button className="dropbtn">Sort By</button>{" "}
      <div className="dropdown-content">
        <p onClick={() => setSearchParams({ sort_by: "article_id" })}>ID</p>
        <p onClick={() => setSearchParams({ sort_by: "title" })}>Title</p>
        <p onClick={() => setSearchParams({ sort_by: "topic" })}>Topic</p>
        <p onClick={() => setSearchParams({ sort_by: "author" })}>Author</p>
        <p onClick={() => setSearchParams({ sort_by: "votes" })}>Votes</p>
        <p onClick={() => setSearchParams({ sort_by: "comment_count" })}>
          Number of comments
        </p>
        <p onClick={() => setSearchParams({ sort_by: "created_at" })}>Date</p>
      </div>
    </div>
  );
};
