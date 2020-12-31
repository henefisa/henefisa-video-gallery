import { useHistory } from "react-router-dom";
import "./index.less";
function Wrapper({ children, ...rest }) {
  return (
    <div className="post-wrapper" {...rest}>
      {children}
    </div>
  );
}

Post.Wrapper = Wrapper;

export default function Post({ title, date, type, path, ...rest }) {
  const history = useHistory();
  return (
    <div className="post" {...rest}>
      <div className="img-wrapper">
        {type === "video" && (
          <div className="play" onClick={() => history.push(path)}>
            <i className="fas fa-play"></i>
          </div>
        )}
        <img
          src={`https://picsum.photos/300/200?random=${Math.random()}`}
          alt="random"
          className="post-img"
          onClick={() => history.push(path)}
        />
      </div>
      <div className="post-body">
        <h3 className="post-title" onClick={() => history.push(path)}>
          {title}
        </h3>
        <small className="post-date">{date}</small>
      </div>
    </div>
  );
}
