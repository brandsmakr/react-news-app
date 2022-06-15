import { getByTitle } from "@testing-library/react";
import React, { Component } from "react";

export class NewsItem extends Component {

    // constructor()
    // {
    //     super();
    //     console.log('hello i am a constructor from NewsItem component');
    // }

  render() {
    let {title, description, imageUrl} = this.props;
    return (
      <>
        <div className="card my-3" style={{width: '18rem'}}>
          <img src={imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">
              {description}
            </p>
            <a href="/news-detials/" className="btn btn-sm btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      </>
    );
  }
}

export default NewsItem;
