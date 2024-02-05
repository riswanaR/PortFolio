import React from "react";


function SeeMore() {
  return (
    <>
      <h1>More Projects</h1>
      <div className="project-container">
        <div className="project-row">
          <div className="cards">
            <img src="/e-commerce.jpg" alt="e-commerce" />
            <div className="overlay">
                <p className="text-p text-white">E-commerce</p>
              </div>

          </div>
          <div className="cards">
            <img src="/blog.jpeg" alt="blog" />
          </div>
          <div className="cards">
            <img src="/book.jpg" alt="book" />
          </div>
        </div>
        <div className="project-row">
          <div className="cards">
            <img src="/watch.jpg" alt="watch" />
          </div>
          <div className="cards">
            <img src="/restaurant.jpg" alt="restaurant" />
          </div>
          <div className="cards">
            <img src="/resort.jpg" alt="resort" />
          </div>
        </div>
      </div>
    </>
  );
}

export default SeeMore;
