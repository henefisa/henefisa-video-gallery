import { useEffect, useState } from "react";
import Post from "../../components/Post";
import Section from "../../components/Section";

export default function Home() {
  const [data, setData] = useState([]);
  const [playlistData, setPlaylistData] = useState({});

  useEffect(() => {
    (async () => {
      const response = await fetch(
        `https://youtube.googleapis.com/youtube/v3/playlists?part=snippet%2CcontentDetails%2Cid&id=PL0zVEGEvSaeEd9hlmCXrk5yUyqUag-n84&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`
      );
      const data = await response.json();
      setPlaylistData(data);
    })();

    (async () => {
      const response = await fetch(
        `https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet%2CcontentDetails%2Cid%2Cstatus&maxResults=12&playlistId=PL0zVEGEvSaeEd9hlmCXrk5yUyqUag-n84&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`
      );
      const data = await response.json();
      console.log(data);
      setData(data.items);
    })();
  }, []);

  return (
    <>
      <Section title={playlistData?.items && playlistData.items[0]?.snippet?.title}>
        <Post.Wrapper>
          {data.map(item => (
            <Post
              type="video"
              thumb={item.snippet.thumbnails.medium.url}
              title={item.snippet.title}
              key={item.id.videoId}
              path={`/video/${item.contentDetails.videoId}`}
            />
          ))}
        </Post.Wrapper>
      </Section>
    </>
  );
}
