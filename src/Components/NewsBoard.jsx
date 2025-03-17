import { useEffect, useState } from "react";
import NewsItem from "./NewsItem";

const NewsBoard = ({ category }) => {
    const [articles, setArticles] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchNews = async () => {
            try {
                let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`;
                const response = await fetch(url);
                const data = await response.json();

                if (data.status === "ok" && data.articles) {
                    setArticles(data.articles);
                } else {
                    throw new Error("Failed to fetch news");
                }
            } catch (err) {
                console.error("Error fetching news:", err);
                setError("Failed to load news.");
            }
        };

        fetchNews();
    }, [category]);

    return (
        <div>
            <h2 className="text-center">
                Latest <span className="badge bg-danger">News</span>
            </h2>

            {error ? (
                <p className="text-center text-danger">{error}</p>
            ) : (
                articles.length > 0 ? (
                    articles.map((news, index) => (
                        <NewsItem
                            key={index}
                            title={news.title}
                            description={news.description}
                            src={news.urlToImage}
                            url={news.url}
                        />
                    ))
                ) : (
                    <p className="text-center">Loading news...</p>
                )
            )}
        </div>
    );
};

export default NewsBoard;
