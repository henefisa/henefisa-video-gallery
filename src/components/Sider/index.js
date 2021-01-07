import SocialBox from "../SocialBox";
import Widget from "../Widget";

export default function Sider() {
  return (
    <aside className="sider">
      <Widget title="Social Subscribox">
        <SocialBox />
      </Widget>
      <Widget title="About">
        <div className="widget-text">
          <p>
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the
            blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language
            ocean which is great.
          </p>
          <p>
            A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a
            paradisematic country, in which roasted parts of sentences.
          </p>
        </div>
      </Widget>
    </aside>
  );
}
