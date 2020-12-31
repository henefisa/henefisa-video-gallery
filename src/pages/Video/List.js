import Post from "../../components/Post";
import Section from "../../components/Section";

const data = [
  {
    title: "Most Viewed Video",
    type: "video",
    posts: [
      {
        title: "Sample",
        date: "10/3/2020",
        path: "/video/1"
      },
      {
        title: "Sample",
        date: "10/3/2020",
        path: "/video/1"
      },
      {
        title: "Sample",
        date: "10/3/2020",
        path: "/video/1"
      },
      {
        title: "Sample",
        date: "10/3/2020",
        path: "/video/1"
      },
      {
        title: "Sample",
        date: "10/3/2020",
        path: "/video/1"
      },
      {
        title: "Sample",
        date: "10/3/2020",
        path: "/video/1"
      }
    ]
  },
  {
    title: "Reviews",
    type: "video",
    posts: [
      {
        title: "Sample",
        date: "10/3/2020",
        path: "/review/1"
      },
      {
        title: "Sample",
        date: "10/3/2020",
        path: "/review/2"
      },
      {
        title: "Sample",
        date: "10/3/2020",
        path: "/review/3"
      },
      {
        title: "Sample",
        date: "10/3/2020",
        path: "/review/4"
      },
      {
        title: "Sample",
        date: "10/3/2020",
        path: "/review/5"
      },
      {
        title: "Sample",
        date: "10/3/2020",
        path: "/review/6"
      }
    ]
  },
  {
    title: "Gaming Videos",
    type: "video",
    posts: [
      {
        title: "League Of Legend",
        date: "10/3/2020",
        path: "/review/1"
      },
      {
        title: "DoTA",
        date: "10/3/2020",
        path: "/review/2"
      },
      {
        title: "Gunny",
        date: "10/3/2020",
        path: "/review/3"
      },
      {
        title: "Happy New Year",
        date: "10/3/2020",
        path: "/review/4"
      },
      {
        title: "Minecraft",
        date: "10/3/2020",
        path: "/review/5"
      },
      {
        title: "Genshin Impact",
        date: "10/3/2020",
        path: "/review/6"
      }
    ]
  }
];
export default function List() {
  return (
    <>
      {data.map((dt, index) => (
        <Section title={dt.title} key={index}>
          <Post.Wrapper>
            {dt.posts.map((post, index) => (
              <Post title={post.title} date={post.date} type={dt.type} path={post.path} key={index} />
            ))}
          </Post.Wrapper>
        </Section>
      ))}
    </>
  );
}
