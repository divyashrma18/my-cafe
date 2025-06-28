import React, { useEffect, useRef, useState } from "react";
import "./News.css";
import { Link } from "react-router-dom";

const newsData = [
  {
    date: "Mar 15, 2024",
    title: "Exploring the World of Coffee Origins",
    image: "/images/news3.jpg",
    path: "/news1"
  },
  {
    date: "Feb 28, 2024",
    title: "5 Ways to Elevate Your Coffee Experience at Home",
    image: "/images/news2.jpg",
    path: "/news2"
  },
  {
    date: "Feb 6, 2024",
    title: "Eco-Friendly Practices at Latte Haven",
    image: "/images/news1.jpg",
    path: "/news3"
  },
];

const News = () => {
  const headingRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (headingRef.current) {
      observer.observe(headingRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="news-container">
      <h2 ref={headingRef} className={`news-heading ${isVisible ? "slide-in" : ""}`}>
        Latest coffee news
      </h2>
      <div className="news-grid">
        {newsData.map((news, index) => (
          <Link to={news.path} key={index} className="news-card">
            <img src={news.image} alt={news.title} className="news-image" />
            <div className="news-content">
              <p className="news-date">{news.date}</p>
              <h3 className="news-title">{news.title}</h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default News;