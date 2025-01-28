import "../video-player.component/video-player.component.css";
import Video from "../../../assets/Video.mp4";
import { useEffect, useRef } from "react";

function VideoPlayer() {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.addEventListener("canplay", () => {
        console.log(" Видео может быть воспроизведено");
      });
    }
  });
  return (
    <div>
      <video ref={videoRef} width="100%" height="500px">
        <source src={Video} type="video/mp4" />
      </video>
    </div>
  );
}

export default VideoPlayer;
