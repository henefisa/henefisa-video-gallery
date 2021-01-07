import { BrowserRouter, Route, Switch } from "react-router-dom";
import BasicLayout from "./layouts/Basic";
import { lazy, Suspense } from "react";
import "antd/dist/antd.css";
import "./global.less";
import { Spin } from "antd";
import ScrollToTop from "./utils/ScrollToTop";

function App() {
  return (
    <BrowserRouter>
      <BasicLayout>
        <Suspense
          fallback={
            <div
              style={{
                position: "fixed",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: "rgba(0,0,0,0.2)",
                display: "grid",
                placeItems: "center"
              }}
            >
              <Spin />
            </div>
          }
        >
          <div className="container">
            <ScrollToTop />
            <Switch>
              <Route path="/post/:id" exact component={lazy(() => import("./pages/Post"))} />
              <Route path="/video/:id" exact component={lazy(() => import("./pages/Video"))} />
              <Route path="/login" exact component={lazy(() => import("./pages/Login"))} />
              <Route path="/register" exact component={lazy(() => import("./pages/Register"))} />
              <Route path="/playlist" exact component={lazy(() => import("./pages/Playlist"))} />
              <Route path="/" exact component={lazy(() => import("./pages/Home"))} />
            </Switch>
          </div>
        </Suspense>
      </BasicLayout>
    </BrowserRouter>
  );
}

export default App;
