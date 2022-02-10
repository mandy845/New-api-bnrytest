import React, { useState, useEffect } from "react";
import { Card, Button } from "antd";
import axios from "axios";
import "./App.css";
import SearchBar from "./components/SearchBar";


const { Meta } = Card;

// npx create-react-app appname
// npm i antd
// npm i axios

function App() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const loadNews = async () => {
      const response = await axios.get(
        "http://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=3da128da75bb4e819bb876090635ca8f"
      );
      setNews(response.data.articles);
    };
    loadNews();
  }, []);

  console.log("news", news);

  return (
    <div className="App">
    <div className="h1">
     <h1>Daily news update</h1>
    </div>
         <di className="search"><SearchBar/></di>
      {news &&
        news.map((item, index) => {
          return (
            <div cards><Card
              key={index}
              hoverable
              style={{ width: "70%" ,}}
              cover={<img alt="image" src={item.urlToImage} />}
            >
              <Meta title={item.title} description={item.content} />
              <a href={item.url} target="_blank" rel="noopener noreferrer">
                <Button type="primary" style={{ marginTop: "10px" }}>
                  Read More
                </Button>
              </a>
            </Card>
            </div>
          );
        })}
    </div>
  );
}

export default App;