import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import NewsItem from './NewsItem';

const SearchNews = (props) => {
  const { topic } = useParams();
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://newsapi.org/v2/everything?q=${topic}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`
        );
        const data = await response.json();
        setArticles(data.articles || []);
        
    
      } catch (error) {
        console.error("Error fetching news:", error);
        setArticles([]);
      }
      setLoading(false);
 

    };

    fetchNews();
  }, [topic, page]);

  return (
    <div className="container my-4">
      <h2 className="text-center">Search Results for "{topic}"</h2>
      {loading ? (
        <p className="text-center">Loading...</p>
      ) : articles.length === 0 ? (
        <p className="text-center">No results found.</p>
      ) : (
        <div className="row">
          {articles.map((article, index) => (
            <div className="col-md-4 mb-3" key={index}>
              <NewsItem
                title={article.title || ""}
                description={article.description || ""}
                imageUrl={article.urlToImage}
                newsUrl={article.url}
                author={article.author}
                date={article.publishedAt}
                source={article.source?.name}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchNews;
