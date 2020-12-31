import "./index.less";
export default function SocialBox() {
  return (
    <div className="social-box">
      <span className="social-box-item facebook">
        <i className="fab fa-facebook"></i>
      </span>
      <span className="social-box-item twitter">
        <i className="fab fa-twitter"></i>
      </span>
      <span className="social-box-item vimeo">
        <i className="fab fa-vimeo"></i>
      </span>
      <span className="social-box-item rss">
        <i className="fas fa-rss"></i>
      </span>
    </div>
  );
}
