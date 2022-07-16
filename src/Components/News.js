import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

class News extends Component {
  static defaultProps = {
    country: "us",
    pageSize: 14,
    category: "general",
    newsSource: "source",
  };
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
    author: PropTypes.string,
    date: PropTypes.string,
    source: PropTypes.string,
  };

  // capitalize function
  capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  constructor(props) {
    super(props);
    this.state = {
      newsArticles: [],
      loading: true,
      page: 1,
      totalArticles: 0,
      // pageSize: 12,
      // prevDisable: true,
      // nextDisable: false
    };
    document.title = `${this.capitalizeFirstLetter(
      this.props.category
    )} News - New Monkey`;
  }

  // after render method componentDidMount calls
  async componentDidMount() {
    // console.log("component did mount");

    // const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=b15ac8649b224c3f97b83b17d296860c&page=${this.state.page}&pageSize=${this.props.pageSize}`;

    // this.setState({
    //   loading: true,
    // });

    // const newsInfo = await fetch(url);
    // const parsedData = await newsInfo.json();
    // // console.log(parsedData);
    // this.setState({
    //   loading: false,
    //   newsArticles: parsedData.articles,
    //   totalArticles: parsedData.totalResults,
    // });

    this.updateNews();
  }

  async updateNews() {
    this.props.setProgress (10);
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=b15ac8649b224c3f97b83b17d296860c&page=${this.state.page}&pageSize=${this.props.pageSize}`;

    this.props.setProgress (25);

    this.setState({
      loading: true,
    });

    const newsInfo = await fetch(url);

    this.props.setProgress (45);
    
    const parsedData = await newsInfo.json();
    this.props.setProgress (60);
    // console.log(parsedData);
    this.setState({
      loading: false,
      newsArticles: parsedData.articles,
      totalArticles: parsedData.totalResults,
    });
    this.props.setProgress (100);
  }

  handlePrevious = async () => {
    // console.log("previous page");

    // if (
    //   !(
    //     this.state.page - 1 >
    //     Math.ceil(this.state.totalArticles / this.props.pageSize)
    //   )
    // ) {
    //   let url = `https://newsapi.org/v2/top-headlines?country=${
    //     this.props.country
    //   }&category=${
    //     this.props.category
    //   }&apiKey=b15ac8649b224c3f97b83b17d296860c&page=${
    //     this.state.page - 1
    //   }&pageSize=${this.props.pageSize}`;
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

  handleNext = async () => {
    // console.log("next page");

    // if (
    //   !(
    //     this.state.page + 1 >
    //     Math.ceil(this.state.totalArticles / this.props.pageSize)
    //   )
    // ) {
    //   let url = `https://newsapi.org/v2/top-headlines?country=${
    //     this.props.country
    //   }&category=${
    //     this.props.category
    //   }&apiKey=b15ac8649b224c3f97b83b17d296860c&page=${
    //     this.state.page + 1
    //   }&pageSize=${this.props.pageSize}`;
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
  fetchMore = async() => {
    this.setState({page: this.state.page + 1});
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;

    // this.setState({
    //   loading: true,
    // });

    const newsInfo = await fetch(url);
    const parsedData = await newsInfo.json();
    // console.log(parsedData);
    this.setState({
      // loading: false,
      newsArticles: this.state.newsArticles.concat(parsedData.articles),
      totalArticles: parsedData.totalResults,
      // loading: false
    });
    
  }

  render() {
    // console.log("render method");
    return (
      <div className="container my-3">
        <h1 className="text-center my-4">
          {" "}
          NewsMonkey - Top Headlines of{" "}
          {this.capitalizeFirstLetter(this.props.category)}
        </h1>

        {/* <div className=" d-flex justify-content-end my-5">
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
        </div> */}
        <InfiniteScroll
            dataLength={this.state.newsArticles.length}
            next={this.fetchMore}
            hasMore={this.state.newsArticles.length !== this.state.totalArticles}
            // loader={<h4>Loading...</h4>}
            loader={<Spinner />}
            // style={{ display: 'flex', flexDirection: 'column' }}
          >
        <div className="container">
        <div className="row">
          {this.state.loading && <Spinner />}
            {
              // !this.state.loading &&
              //  map enclose in () bracket not in square bracket {}
              this.state.newsArticles.map((news) => {
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
        </div> */}
      </div>
    );
  }
}

export default News;
