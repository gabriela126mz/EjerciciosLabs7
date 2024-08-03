import React, { useState, useEffect } from "react";
import axios from "axios";

const App = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null); 

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(
          "https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty"
        );
        const topIds = response.data.slice(0, 5);
        const newsPromises = topIds.map((id) =>
          axios.get(`https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`)
        );
        const newsData = await Promise.all(newsPromises);
        setNews(newsData.map((data) => data.data));
      } catch (error) {
        setError("Error fetching news");
        console.error("Error fetching news:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  if (loading) return <p>Loading...</p>;

  if (error) return <p>{error}</p>;

  const renderNews = () => {
    return news.map((article) => (
      <li key={article.id}>
        <a href={article.url} target="_blank" rel="noopener noreferrer">
          {article.title}
        </a>
      </li>
    ));
  };

  return (
    <div>
      <h1>Hacker News</h1>
      <ul>{renderNews()}</ul>
    </div>
  );
};

export default App;
