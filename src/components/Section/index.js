import { Typography } from "antd";
import "./index.less";
const { Title } = Typography;

export default function Section({ children, title }) {
  return (
    <section className="section">
      <div className="section-title">
        <Title level={4}>{title}</Title>
      </div>
      <div className="section-content">{children}</div>
    </section>
  );
}
