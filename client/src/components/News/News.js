import React from "react";
import "./news.scss";
import { getNews } from "../../common/api";
import Article from "../Article/Article";

class News extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      articles: []
    };
  }

  render() {
    const { articles } = this.state;
    console.log(articles);

    return (
      <div className="mainBlock">
        {articles.map(article => (
          <Article
            title={article.title}
            path={article.path}
            category={article.category}
          />
        ))}
      </div>
    );
  }

  componentDidMount() {
    getNews().then(result => {
      this.setState({
        articles: result.data
      });
    });
  }
}
export default News;
