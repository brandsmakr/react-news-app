import React, { Component } from "react";
import NewsItem from "./NewsItem";

class News extends Component {

    articles = [
        {
            "source": { "id": "reuters", "name": "Reuters" },
            "author": null,
            "title": "The Saudi investment king who no longer rules alone - Reuters.com",
            "description": "The prince who's the international face of Saudi business may no longer be able to call all the shots.",
            "url": "https://www.reuters.com/markets/europe/saudi-investment-king-who-no-longer-rules-alone-2022-06-15/",
            "urlToImage": "https://www.reuters.com/resizer/mhMJuBHlObs-xRAdWdZI3QYkrHU=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/3U7NRQZXGRLGJLEQIPBTFGHKTM.jpg",
            "publishedAt": "2022-06-15T04:03:00Z",
            "content": "DUBAI, June 15 (Reuters) - The prince who's the international face of Saudi business may no longer be able to call all the shots.\r\nFor years, Prince Alwaleed bin Talal, Saudi Arabia's self-styled War… [+6566 chars]"
        },
        {
            "source": { "id": null, "name": "The Guardian" },
            "author": "Josh Taylor",
            "title": "Microsoft to retire Internet Explorer browser and redirect users to Edge",
            "description": "Company says decision to disable desktop app comes as web developers less likely to make sites compatible with browser, which first graced computers in 1995Microsoft has announced it will kill off its much-maligned legacy internet browser Internet Explorer cl…",
            "url": "https://amp.theguardian.com/technology/2022/jun/15/microsoft-to-retire-internet-explorer-browser-and-redirect-users-to-edge",
            "urlToImage": "https://i.guim.co.uk/img/media/36f27b7dc6418241f02b69d071fc310e7a8a526c/0_0_4998_2999/master/4998.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=3de1b77b7bc4f2dea968bdead15100db",
            "publishedAt": "2022-06-15T02:56:01Z",
            "content": "Microsoft has announced it will kill off its much-maligned legacy internet browser Internet Explorer close to 27 years after it graced desktop computers in 1995.\r\nFrom 15 June, the desktop app will b… [+3114 chars]"
        }
    ]

    constructor()
    {
        super();
        this.state = {
            articles: this.articles,
            leading: false  
        }
    }

  render() {
    return (
      <div className="container my-3">
        <h1 className="text-center my-4"> NewsMonkey - Top Headlines </h1>
        <div className="row">
            {
                this.state.articles.map((data)=>{
                    console.log(data);
                })
            }
        {/* {this.state.articles.map((element)=>{
            // console.log(element);
            return 
            <div className="col-md-4" key={element.url}>
            <NewsItem title={element.title} description={element.description} imageUrl={element.urlToImage} />
          </div> 
        })}         */}
        </div>
      </div>
    );
  }
}

export default News;
