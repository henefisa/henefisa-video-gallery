import { Link } from "react-router-dom";
import { Menu } from "antd";

export default function Navigator() {
  return (
    <div style={{ backgroundColor: "#001529", position: "sticky", top: 0, left: 0, zIndex: 2000 }}>
      <div className="container">
        <Menu mode="horizontal" theme="dark" style={{ height: 60, lineHeight: "60px" }}>
          <Menu.Item>
            <Link to="/">Home</Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="/videos">Videos</Link>
          </Menu.Item>
          <Menu.Item>
            <a href="https://henefisa-blog.web.app">Blog</a>
          </Menu.Item>
          <Menu.Item>
            <Link to="/videos_tag/review">Review</Link>
          </Menu.Item>
        </Menu>
      </div>
    </div>
  );
}
