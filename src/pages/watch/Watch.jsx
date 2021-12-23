import { ArrowBackOutlined } from "@material-ui/icons";
import "./watch.scss";

export default function Watch() {
  return (
    <div className="watch">
      <div className="back">
        <ArrowBackOutlined />
        Home
      </div>
      <video
        src="https://dm0qx8t0i9gc9.cloudfront.net/watermarks/video/GTYSdDW/videoblocks-aerial-iceland-river-rapids_srygyl7nl__d105d54b074a996dd09912aece5c97ec__P360.mp4"
        className="video"
        autoPlay
        progress
        controls
      />
    </div>
  );
}
