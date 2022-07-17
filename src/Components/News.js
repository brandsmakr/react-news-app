import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {

  const [newsArticles, setNewsArticles] = useState([]);
  const [loading, setLoading] = useEffect(true);
  const [page, setPage] = useState(1);
  const [totalArticles, setTotalArticles] = useState(0);
  // const [pageSize, setPageSize] = useState(12);
  // const [prevDisable, setPrevDisable] = useState(true);
  // const [nextDisable, setNextDisable] = useState(false);
  // document.title = `${this.capitalizeFirstLetter(
  //   props.category
  // )} News - New Monkey`;


  // capitalize function
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const updateNews = async () => {
    props.setProgress (10);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=b15ac8649b224c3f97b83b17d296860c&page=${page}&pageSize=${props.pageSize}`;

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
  }, []);

  const handlePrevious = async () => {
    // console.log("previous page");

    // if (
    //   !(
    //     this.state.page - 1 >
    //     Math.ceil(this.state.totalArticles / props.pageSize)
    //   )
    // ) {
    //   let url = `https://newsapi.org/v2/top-headlines?country=${
    //     props.country
    //   }&category=${
    //     props.category
    //   }&apiKey=b15ac8649b224c3f97b83b17d296860c&page=${
    //     this.state.page - 1
    //   }&pageSize=${props.pageSize}`;
    //   this.setState({
    //     loading: true,
    //   });
    //   let newsInfo = await fetch(url);
    //   let parsedData = await newsInfo.json();
    //   // console.log(parsedData);
    //   this.setState({
    //     loading: false,
    //     page: this.state.page - 1,
    //     newsArticles: parsedData.articles,
    //     // nextDisable: false,
    //     // prevDisable: false
    //   });
    // } else {
    //   // this.setState({
    //   //   prevDisable: true,
    //   //   nextDisable: true
    //   // })
    // }

    this.setState({ page: this.state.page - 1 });
    this.updateNews();
  };

  const handleNext = async () => {
    // console.log("next page");

    // if (
    //   !(
    //     this.state.page + 1 >
    //     Math.ceil(this.state.totalArticles / props.pageSize)
    //   )
    // ) {
    //   let url = `https://newsapi.org/v2/top-headlines?country=${
    //     props.country
    //   }&category=${
    //     props.category
    //   }&apiKey=b15ac8649b224c3f97b83b17d296860c&page=${
    //     this.state.page + 1
    //   }&pageSize=${props.pageSize}`;
    //   this.setState({
    //     loading: true,
    //   });
    //   let newsInfo = await fetch(url);
    //   let parsedData = await newsInfo.json();
    //   // console.log(parsedData);
    //   this.setState({
    //     loading: false,
    //     page: this.state.page + 1,
    //     newsArticles: parsedData.articles,
    //     // nextDisable: false,
    //     // prevDisable: false
    //   });
    // } else {
    //   // this.setState({
    //   //   nextDisable: true,
    //   //   prevDisable: false
    //   // })
    // }
    this.setState({ page: this.state.page + 1 });
    // this.updateNews();
  };

  // fetch more data
  const fetchMore = async() => {

    setPage(this.state.page + 1);

    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;

    setLoading(true);

    const newsInfo = await fetch(url);
    const parsedData = await newsInfo.json();
    // console.log(parsedData);

    setNewsArticles(newsArticles.concat(parsedData.articles));
    setTotalArticles(parsedData.totalResults);
    
  }

    return (
      <div className="container my-3">
        <h1 className="text-center my-4">
          {" "}
          NewsMonkey - Top Headlines of{" "}
          {capitalizeFirstLetter(props.category)}
        </h1>

        {/* <div className=" d-flex justify-content-end my-5">
          <button
            disabled={page <= 1}
            type="button"
            className="btn btn-dark mx-2"
            onClick={handlePrevious}
          >
            &larr; Previous Page
          </button>
          <button
            disabled={
              page + 1 >
              Math.ceil(totalArticles / props.pageSize)
            }
            // disabled={page > 1}
            type="button"
            className="btn btn-dark mx-2"
            onClick={handleNext}
          >
            Next Page &rarr;
          </button>
        </div> */}
        <InfiniteScroll
            dataLength={newsArticles.length}
            next={fetchMore}
            hasMore={newsArticles.length !== totalArticles}
            // loader={<h4>Loading...</h4>}
            loader={<Spinner />}
            // style={{ display: 'flex', flexDirection: 'column' }}
          >
        <div className="container">
        <div className="row">
          {loading && <Spinner />}
            {
              // !this.state.loading &&
              //  map enclose in () bracket not in square bracket {}
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
        {/* <div className="container my-5 d-flex justify-content-end">
          <button
            disabled={page <= 1}
            type="button"
            className="btn btn-dark mx-2"
            onClick={handlePrevious}
          >
            &larr; Previous Page
          </button>
          <button
            disabled={
              page + 1 >
              Math.ceil(totalArticles / props.pageSize)
            }
            // disabled={page >= 1}
            type="button"
            className="btn btn-dark mx-2"
            onClick={handleNext}
          >
            Next Page &rarr;
          </button>
        </div> */}
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
