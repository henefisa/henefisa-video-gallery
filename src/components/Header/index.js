import { Button } from "antd";
import { Link } from "react-router-dom";
import "./index.less";

export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <h1>
            <Link to="/">Logo</Link>
          </h1>
        </div>
        <div className="social">
          <span className="social-item">
            <i
              className="fab fa-facebook"
              onClick={() => {
                window.open("https://facebook.com/henefisa", "_blank");
              }}
            ></i>
          </span>
          <Button style={{ marginLeft: 10 }}>
            <Link to="/login">Login</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
