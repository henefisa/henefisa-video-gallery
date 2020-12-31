import "./index.less";
export default function Widget({ children, title }) {
  return (
    <div className="widget">
      <h4 className="widget-title">{title}</h4>
      <div className="widget-content">{children}</div>
    </div>
  );
}
