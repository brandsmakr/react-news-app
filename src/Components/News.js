import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {

  const [newsArticles, setNewsArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalArticles, setTotalArticles] = useState(0);
  // document.title = `${this.capitalizeFirstLetter(
  //   props.category
  // )} News - New Monkey`;


  // capitalize function
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const updateNews = async () => {
    props.setProgress (10);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;

    props.setProgress (25);

    setLoading(true);

    const newsInfo = await fetch(url);

    props.setProgress (45);
    
    const parsedData = await newsInfo.json();
    props.setProgress (60);
    // console.log(parsedData);

    setLoading(true);
    setNewsArticles(parsedData.articles);
    setTotalArticles(parsedData.totalResults);
    
    props.setProgress (100);
  }

  useEffect(()=>{
    updateNews();
  });


  // fetch more data
  const fetchMore = async() => {

    setPage(page + 1);

    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;

    setLoading(true);

    const newsInfo = await fetch(url);
    const parsedData = await newsInfo.json();
    // console.log(parsedData);

    setNewsArticles(newsArticles.concat(parsedData.articles));
    setTotalArticles(parsedData.totalResults);
    
  }

    return (
      <div className="container my-2 mt-5 pt-5">
        <h1 className="text-center my-4">
          {" "}
          NewsMonkey - Top Headlines of{" "}
          {capitalizeFirstLetter(props.category)}
        </h1>

        
        <InfiniteScroll
            dataLength={newsArticles.length}
            next={fetchMore}
            hasMore={newsArticles.length !== totalArticles}
            loader={<Spinner />}
          >
        <div className="container">
        <div className="row">
          {/* {loading && <Spinner />} */}
            {
              newsArticles.map((news) => {
                // console.log(data);
                return (
                  <div className="col-md-4" key={news.url}>
                    <NewsItem
                      imageUrl={news.urlToImage}
                      title={news.title ? news.title.slice(0, 45) : ""}
                      description={
                        news.description ? news.description.slice(0, 88) : ""
                      }
                      newsUrl={news.url}
                      author={news.author}
                      date={news.publishedAt}
                      newsSource={news.source.name}
                    />
                  </div>
                );
              })
            }
          
        </div>
        </div>
        </InfiniteScroll>
        
      </div>
    );
}

News.defaultProps = {
  country: "us",
  pageSize: 14,
  category: "general",
  newsSource: "source",
};
News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
  author: PropTypes.string,
  date: PropTypes.string,
  source: PropTypes.string,
};

export default News;
