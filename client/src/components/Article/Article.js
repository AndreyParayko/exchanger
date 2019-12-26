import React from "react";
import noImg from "../../assets/Images/noImage.png";
import "./article.scss";
class Article extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      articles: []
    };
  }
  render() {
    const { title, path, category, id } = this.props;
    const urlForLink = `https://ukr.segodnya.ua${path}`;
    return (
      <div className="newsBlock">
        <img className="image" src={noImg} alt=""></img>
        <br />
        <a href={urlForLink}>
          {title}
          <br /><br />
          {category}
        </a>
      </div>
    );
  }
}
export default Article;
