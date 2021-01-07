import { useState } from "react";
import { Link } from "react-router-dom";
import Search from "../../components/Search";
import "./index.less";
export default function Playlist() {
  const [playlist, setPlaylist] = useState([]);

  const handleSearch = async values => {
    const response = await fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=${values}&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`
    );
    const data = await response.json();
    setPlaylist(data.items);
  };

  return (
    <div className="playlist-wrapper">
      <div className="search-box">
        <h3>Search on Youtube</h3>
        <Search placeholder="Search" handleSearch={handleSearch} />
      </div>
      <div className="playlist">
        {playlist.map(item => (
          <div className="playlist-item" key={item.id.videoId}>
            <div className="thumb">
              <img src={item.snippet.thumbnails.medium.url} alt={item.snippet.title} title={item.snippet.title} />
            </div>
            <div className="detail">
              <h3 className="title">
                <Link to={`/video/${item.id.videoId}`}>{item.snippet.title}</Link>
              </h3>
            </div>
          </div>
        ))}
        {!playlist.length && <h3 className="remind-text">Type anything to search on Youtube</h3>}
      </div>
    </div>
  );
}
