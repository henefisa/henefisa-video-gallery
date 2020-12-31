import Post from "../../components/Post";
import Section from "../../components/Section";

const data = {
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
      path: "video/5"
    },
    {
      title: "Problem",
      date: "10/3/2020",
      path: "/video/6"
    }
  ]
};

export default function Review() {
  return (
    <>
      <Section title={data.title}>
        <Post.Wrapper>
          {data.posts.map((post, index) => (
            <Post title={post.title} date={post.date} type="video" path={post.path} key={index} />
          ))}
        </Post.Wrapper>
      </Section>
    </>
  );
}
