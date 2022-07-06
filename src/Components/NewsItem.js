import { getByTitle } from "@testing-library/react";
import React, { Component } from "react";

export class NewsItem extends Component {

    // constructor()
    // {
    //     super();
    //     console.log('hello i am a constructor from NewsItem component');
    // }

  render() {
    let {title, description, imageUrl, newsUrl} = this.props;
    return (
      <>
        <div className="card my-3" style={{width: '20rem'}}>
          <img 
          // src={imageUrl?imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqDbYS8LG21z52niY6oyXTtfS9Ug_QOUZSig&usqp=CAU"} 
          src={!imageUrl?"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqDbYS8LG21z52niY6oyXTtfS9Ug_QOUZSig&usqp=CAU" : imageUrl}
          className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title} .....</h5>
            <p className="card-text">
              {description} .....
            </p>
            <a href={newsUrl} rel='noreferrer' target="_blank" className="btn btn-sm btn-dark">
              Go somewhere
            </a>
          </div>
        </div>
      </>
    );
  }
}

export default NewsItem;
