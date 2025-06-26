import React from "react";
import newsnook from "./newsnook.png";
const NewsItem=(props)=>{

    let { title, description, imageUrl, newsUrl, author, date, source } =
      props;

    return (
      <div className="my-3 ">
        <div className="card">
          <div style={{
            display:'flex',
            justifyContent:'flex-end',
            position:'absolute',
            right:'0'
          }}>
          <span
            className="badge rounded-pill bg-danger"
          >
            {source}
          </span>
          </div>
      
          <img
            src={!imageUrl ? newsnook : imageUrl}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{title} </h5>
            <p className="card-text">{description}</p>
            <p className="card-text">
              <strong className="text-body-secondary  text-bg-light">
                By {author ? author : "Unknown"} on{" "}
                {new Date(date).toGMTString()}
              </strong>
            </p>
            <a
              rel="noreferrer"
              href={newsUrl}
              target="_blank"
              className="btn btn-sm btn-dark"
            >
              Read more
            </a>
          </div>
        </div>
      </div>
    );
  }


export default NewsItem;
