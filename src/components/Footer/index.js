import { Col, Row } from "antd";
import { Link } from "react-router-dom";
import "./index.less";

export default function Footer() {
  return (
    <footer id="footer">
      <div className="container">
        <Row gutter={30}>
          <Col sm={24} md={12} lg={6} span={24}>
            <h4 className="footer-title">Meta</h4>
            <ul className="footer-list">
              <li className="footer-list-item">
                <Link to="/register">Register</Link>
              </li>
              <li className="footer-list-item">
                <Link to="/login">Login</Link>
              </li>
              <li className="footer-list-item">
                <a href="https://henefisa-blog.web.app">Blog</a>
              </li>
            </ul>
          </Col>
          <Col sm={24} md={12} lg={6} span={24}>
            <h4 className="footer-title">Tags Cloud</h4>
            <span className="tag">Band</span>
            <span className="tag">Delicius</span>
            <span className="tag">Fail</span>
            <span className="tag">Featured Video</span>
            <span className="tag">Foot</span>
            <span className="tag">Sample</span>
            <span className="tag">Funny</span>
            <span className="tag">Music</span>
            <span className="tag">Review</span>
            <span className="tag">Official</span>
            <span className="tag">Trailer</span>
            <span className="tag">Video games</span>
            <span className="tag">Viral</span>
          </Col>
          <Col sm={24} md={12} lg={6} span={24}>
            <h4 className="footer-title">Stay connect</h4>
            <p style={{ color: "#bbb", fontWeight: 500 }}>
              It is a long established fact that a reader will be distracted by the readable content of a page when
              looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of
              letters, as opposed to using 'Content here, content here', making it look like readable English.
            </p>
          </Col>
          <Col sm={24} md={12} lg={6} span={24}>
            <h4 className="footer-title">About</h4>
            <p style={{ color: "#bbb", fontWeight: 500 }}>
              Donec rutrum varius quam non euismod. Nullam arcu urna, dignisim amsan bindum ut, fermentum a quam.
            </p>
            <p style={{ color: "#bbb", fontWeight: 500 }}>
              Suspendisse fermentum augue vel nulla iaculis id tempus massa consequat. Donec venenatis leo eu felis
              condiment lorem ipsum.
            </p>
          </Col>
        </Row>
        <div className="copyright">Copyright 2020 By Trần Văn Nghĩa</div>
      </div>
    </footer>
  );
}
