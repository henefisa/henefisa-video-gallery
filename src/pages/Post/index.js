import { Typography } from "antd";
import Post from "../../components/Post";
import { Link } from "react-router-dom";
import "./index.less";

export default function Posts() {
  return (
    <article className="article">
      <img src="https://picsum.photos/750/500" alt="sss" className="top-image" />
      <div className="post-header">
        <Typography.Title level={2}>Decorative Pumpkins: Which one?</Typography.Title>
      </div>
      <div className="post-body">
        <p>
          Lorem ipsum dolor sit amet, ex vim nostrud phaedrum, docendi facilisi te sed. An molestie inimicus temporibus
          per, vel debet aeque consequat et. Usu insolens deserunt suscipiantur et, ne enim laudem iudicabit his. Dicam
          luptatum interpretaris te his, quo te nisl nostrum, id lobortis senserit contentiones cum. Dicant corpora
          platonem usu ad, his sint officiis ad, et usu oratio cetero iisque.
        </p>
        <p>
          Choro interesset ei vis. Prompta singulis gubergren eum no, ex mei mazim constituto. Ad appareat erroribus
          est, at legendos petentium vix, ei mea timeam nostrum. His soluta possim no. Probo contentiones ut usu, dicam
          aliquando ius ad.
        </p>
        <p>
          Laudem postea senserit an mea, te liber oratio sed, mel fugit dignissim ex. Sit malis admodum voluptua id, qui
          ridens audiam debitis ei, per sanctus scaevola et. Eros denique persecuti sea ut, sed cu nemore adipisci,
          legimus vivendo at has. Quem partem mea at, eirmod noluisse qui ut, eos in prima debitis. At has malis
          efficiendi, ea sit elitr euismod. Vide vidisse comprehensam cu vis.
        </p>
        <p>
          Laudem postea senserit an mea, te liber oratio sed, mel fugit dignissim ex. Sit malis admodum voluptua id, qui
          ridens audiam debitis ei, per sanctus scaevola et. Eros denique persecuti sea ut, sed cu nemore adipisci,
          legimus vivendo at has. Quem partem mea at, eirmod noluisse qui ut, eos in prima debitis. At has malis
          efficiendi, ea sit elitr euismod. Vide vidisse comprehensam cu vis.
        </p>
        <p>
          Choro interesset ei vis. Prompta singulis gubergren eum no, ex mei mazim constituto. Ad appareat erroribus
          est, at legendos petentium vix, ei mea timeam nostrum. His soluta possim no. Probo contentiones ut usu, dicam
          aliquando ius ad.
        </p>
      </div>
      <div className="post-info">
        <span className="meta">
          <span className="meta-info">Category</span>
          <Link to="/category/sample">Sample</Link>
        </span>
      </div>
      <div className="related">
        <h4 className="related-title">RELATED POSTS</h4>
        <Post.Wrapper>
          <Post title="Sample Post" date="20/10/2020" path={`/post/${~~(Math.random() * 100)}`} />
          <Post title="Sample Post" date="20/10/2020" path={`/post/${~~(Math.random() * 100)}`} />
          <Post title="Sample Post" date="20/10/2020" path={`/post/${~~(Math.random() * 100)}`} />
        </Post.Wrapper>
      </div>
    </article>
  );
}
