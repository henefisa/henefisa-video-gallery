import { Typography } from "antd";
import Post from "../../components/Post";
import { Link } from "react-router-dom";
import Youtube from "react-youtube";
import "./index.less";
const { Paragraph } = Typography;

export default function Video() {
  return (
    <article className="videos">
      <div className="video-title">Awesome Film Perfomance</div>
      <Youtube className="youtube" videoId="qQm_iYS3WeI" opts={{ height: 400, width: "100%" }} />
      <div className="video-details">
        <div className="date">Published on September 29 ,2020</div>
        <Paragraph ellipsis={{ rows: 1, expandable: true, symbol: "Read more" }}>
          Lorem ipsum dolor sit amet, ex vim nostrud phaedrum, docendi facilisi te sed. An molestie inimicus temporibus
          per, vel debet aeque consequat et. Usu insolens deserunt suscipiantur et, ne enim laudem iudicabit his. Dicam
          luptatum interpretaris te his, quo te nisl nostrum, id lobortis senserit contentiones cum. Dicant corpora
          platonem usu ad, his sint officiis ad, et usu oratio cetero iisque. Choro interesset ei vis. Prompta singulis
          gubergren eum no, ex mei mazim constituto. Ad appareat erroribus est, at legendos petentium vix, ei mea timeam
          nostrum. His soluta possim no. Probo contentiones ut usu, dicam aliquando ius ad.
        </Paragraph>
      </div>
      <div className="reviews">
        <div className="review-header">
          <div className="review-summary">
            <h4>Excellent</h4>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
              laborum.
            </p>
          </div>
          <div className="review-score">
            <span className="score">7.5</span>
          </div>
        </div>
        <div className="review-criteria">
          <div className="criteria">
            <div className="score" style={{ width: "70%" }}>
              <span className="criteria-name">Perfomance</span>
            </div>
            <span className="criteria-score">7</span>
          </div>
          <div className="criteria">
            <div className="score" style={{ width: "90%" }}>
              <span className="criteria-name">Features</span>
            </div>
            <span className="criteria-score">9</span>
          </div>
          <div className="criteria">
            <div className="score" style={{ width: "87%" }}>
              <span className="criteria-name">Video Quality</span>
            </div>
            <span className="criteria-score">8.7</span>
          </div>
          <div className="criteria">
            <div className="score" style={{ width: "80%" }}>
              <span className="criteria-name">Image Quality</span>
            </div>
            <span className="criteria-score">8</span>
          </div>
        </div>
        <div className="reviews-info">
          <span className="meta">
            <span className="meta-info">Category</span>
            <Link to="/category/sample">Sample</Link>
          </span>
        </div>
      </div>
      <div className="related">
        <h4 className="related-title">RELATED POSTS</h4>
        <Post.Wrapper>
          <Post title="Sample Post" date="20/10/2020" path={`/video/${~~(Math.random() * 100)}`} />
          <Post title="Sample Post" date="20/10/2020" path={`/video/${~~(Math.random() * 100)}`} />
          <Post title="Sample Post" date="20/10/2020" path={`/video/${~~(Math.random() * 100)}`} />
        </Post.Wrapper>
      </div>
    </article>
  );
}
