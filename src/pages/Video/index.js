import { Typography } from "antd";
import Post from "../../components/Post";
import { Link, useParams } from "react-router-dom";
import Youtube from "react-youtube";
import "./index.less";
import { useEffect, useState } from "react";
const { Paragraph } = Typography;

export default function Video() {
  const { id } = useParams();

  const [videoData, setVideoData] = useState(null);
  const [relatedVideos, setRelatedVideos] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await fetch(
        `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails&id=${id}&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`
      );
      const data = await response.json();
      setVideoData(data.items[0]);
    })();

    (async () => {
      const response = await fetch(
        `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=4&relatedToVideoId=${id}&type=video&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`
      );
      const data = await response.json();
      console.log(data);
      setRelatedVideos(data?.items?.slice(1) || []);
    })();
  }, [id]);

  return (
    <article className="videos">
      <div className="video-title">{videoData?.snippet?.title}</div>
      <Youtube
        className="youtube"
        videoId={id}
        opts={{
          height: 400,
          width: "100%",
          playerVars: {
            autoplay: true
          }
        }}
      />
      <div className="video-details">
        <div className="date">Published on September 29 ,2020</div>
        <Paragraph ellipsis={{ rows: 1, expandable: true, symbol: "Read more" }}>
          {videoData?.snippet?.description}
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
        <h4 className="related-title">RELATED VIDEOS</h4>
        <Post.Wrapper>
          {relatedVideos.map(video => (
            <Post
              type="video"
              thumb={video?.snippet?.thumbnails?.medium?.url}
              title={video?.snippet?.title}
              path={`/video/${video.id.videoId}`}
            />
          ))}
        </Post.Wrapper>
      </div>
    </article>
  );
}
