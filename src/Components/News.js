import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";

class News extends Component {
  static defaultProps = {
    country: "us",
    pageSize: 14,
    category: "general",
    newsSource: "source"
  };
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
    author: PropTypes.string,
    date: PropTypes.string,
    source: PropTypes.string
  };

  constructor() {
    super();
    this.state = {
      newsArticles: this.articles,
      loading: false,
      page: 1,
      // pageSize: 12,
      // prevDisable: true,
      // nextDisable: false
    };
  }

  // after render method componentDidMount calls
  async componentDidMount() {
    // console.log("component did mount");

    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=b15ac8649b224c3f97b83b17d296860c&page=${this.state.page}&pageSize=${this.props.pageSize}`;

    this.setState({
      loading: true,
    });

    let newsInfo = await fetch(url);
    let parsedData = await newsInfo.json();
    // console.log(parsedData);
    this.setState({
      loading: false,
      newsArticles: parsedData.articles,
      totalArticles: parsedData.totalResults,
    });
  }

  handlePrevious = async () => {
    console.log("previous page");

    if (
      !(
        this.state.page - 1 >
        Math.ceil(this.state.totalArticles / this.props.pageSize)
      )
    ) {
      let url = `https://newsapi.org/v2/top-headlines?country=${
        this.props.country
      }&category=${
        this.props.category
      }&apiKey=b15ac8649b224c3f97b83b17d296860c&page=${
        this.state.page - 1
      }&pageSize=${this.props.pageSize}`;
      this.setState({
        loading: true,
      });
      let newsInfo = await fetch(url);
      let parsedData = await newsInfo.json();
      // console.log(parsedData);
      this.setState({
        loading: false,
        page: this.state.page - 1,
        newsArticles: parsedData.articles,
        // nextDisable: false,
        // prevDisable: false
      });
    } else {
      // this.setState({
      //   prevDisable: true,
      //   nextDisable: true
      // })
    }
  };

  handleNext = async () => {
    console.log("next page");

    if (
      !(
        this.state.page + 1 >
        Math.ceil(this.state.totalArticles / this.props.pageSize)
      )
    ) {
      let url = `https://newsapi.org/v2/top-headlines?country=${
        this.props.country
      }&category=${
        this.props.category
      }&apiKey=b15ac8649b224c3f97b83b17d296860c&page=${
        this.state.page + 1
      }&pageSize=${this.props.pageSize}`;
      this.setState({
        loading: true,
      });
      let newsInfo = await fetch(url);
      let parsedData = await newsInfo.json();
      // console.log(parsedData);
      this.setState({
        loading: false,
        page: this.state.page + 1,
        newsArticles: parsedData.articles,
        // nextDisable: false,
        // prevDisable: false
      });
    } else {
      // this.setState({
      //   nextDisable: true,
      //   prevDisable: false
      // })
    }
  };

  render() {
    console.log("render method");
    return (
      <div className="container my-3">
        <h1 className="text-center my-4"> NewsMonkey - Top Headlines </h1>

        <div className=" d-flex justify-content-end my-5">
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-dark mx-2"
            onClick={this.handlePrevious}
          >
            &larr; Previous Page
          </button>
          <button
            disabled={
              this.state.page + 1 >
              Math.ceil(this.state.totalArticles / this.props.pageSize)
            }
            // disabled={this.state.page > 1}
            type="button"
            className="btn btn-dark mx-2"
            onClick={this.handleNext}
          >
            Next Page &rarr;
          </button>
        </div>
        <div className="row">
          {this.state.loading && <Spinner />}
          {!this.state.loading &&
          //  map enclose in () bracket not in square bracket {}
            this.state.newsArticles?.map((news) => {
              // console.log(data);
              return (
                <div className="col-md-4" key={news.url}>
                  <NewsItem
                    imageUrl = {news.urlToImage}
                    title = {news.title ? news.title.slice(0, 45) : ""}
                    description = {
                      news.description ? news.description.slice(0, 88) : ""
                    }
                    newsUrl = {news.url}
                    author = {news.author}
                    date = {news.publishedAt}
                    newsSource = {news.source.name}
                  />
                </div>
              );
            })}
        </div>
        <div className="container my-5 d-flex justify-content-end">
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-dark mx-2"
            onClick={this.handlePrevious}
          >
            &larr; Previous Page
          </button>
          <button
            disabled={
              this.state.page + 1 >
              Math.ceil(this.state.totalArticles / this.props.pageSize)
            }
            // disabled={this.state.page >= 1}
            type="button"
            className="btn btn-dark mx-2"
            onClick={this.handleNext}
          >
            Next Page &rarr;
          </button>
        </div>
      </div>
    );
  }
}

export default News;
