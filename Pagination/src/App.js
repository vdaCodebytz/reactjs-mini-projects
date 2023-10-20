import React, { useState } from "react";
import { useFetch } from "./useFetch";
import Follower from "./Follower";
function App() {
  const { loading, data } = useFetch();
  let [currPage, setCurrPage] = useState(1);

  let pageNum = [];
  for (let i = 0; i < data.length; i++) {
    pageNum.push(
      <button
        className={`page-btn ${currPage === i + 1 ? "active-btn" : ""}`}
        onClick={() => {
          setCurrPage(i + 1);
        }}
        key={i}
      >
        {i + 1}
      </button>
    );
  }

  return (
    <section>
      <h1 className="section-title ">
        Pagination
        <div className="underline"></div>
      </h1>

      <div className="followers container">
        {loading ? (
          <h1>Loading</h1>
        ) : (
          data[currPage - 1].map((person) => (
            <Follower person={person} key={person.id} />
          ))
        )}
      </div>
      <div className="btn-container">
        <button
          type="button"
          className="prev-btn"
          onClick={() => (currPage > 1 ? setCurrPage(currPage - 1) : 0)}
        >
          {`<<`}
        </button>
        {pageNum}
        <button
          type="button"
          className="next-btn"
          onClick={() =>
            currPage < data.length ? setCurrPage(currPage + 1) : 0
          }
        >
          {`>>`}
        </button>
      </div>
    </section>
  );
}

export default App;
