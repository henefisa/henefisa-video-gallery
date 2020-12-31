import Post from "../../components/Post";
import Section from "../../components/Section";

const data = [
  {
    title: "Lastest Post",
    posts: [
      {
        title: "Sample",
        date: "10/3/2020",
        path: "/post/1"
      },
      {
        title: "Sample",
        date: "10/3/2020",
        path: "/post/1"
      },
      {
        title: "Sample",
        date: "10/3/2020",
        path: "/post/1"
      }
    ]
  },
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
        title: "Blade and Soul",
        date: "10/3/2020",
        path: "/video/1"
      },
      {
        title: "HIHI",
        date: "10/3/2020",
        path: "/video/2"
      },
      {
        title: "Bye 2020",
        date: "10/3/2020",
        path: "/video/3"
      },
      {
        title: "Yasuo 1 vs 5",
        date: "10/3/2020",
        path: "/video/4"
      },
      {
        title: "Happy birthday",
        date: "10/3/2020",
        path: "/video/5"
      },
      {
        title: "Problem",
        date: "10/3/2020",
        path: "/video/6"
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
        path: "/video/1"
      },
      {
        title: "DoTA",
        date: "10/3/2020",
        path: "/video/2"
      },
      {
        title: "Gunny",
        date: "10/3/2020",
        path: "/video/3"
      },
      {
        title: "Happy New Year",
        date: "10/3/2020",
        path: "/video/4"
      },
      {
        title: "Minecraft",
        date: "10/3/2020",
        path: "/video/5"
      },
      {
        title: "Genshin Impact",
        date: "10/3/2020",
        path: "/video/6"
      }
    ]
  }
];

export default function Home() {
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
