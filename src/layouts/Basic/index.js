import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Navigator from "../../components/Navigator";
import Sider from "../../components/Sider";
import "./index.less";
export default function BasicLayout({ children }) {
  return (
    <div className="basic-layout">
      <Header />
      <Navigator />
      <div className="container main-layout">
        <Sider />
        <main className="main">{children}</main>
      </div>
      <Footer />
    </div>
  );
}
