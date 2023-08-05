import React, { useRef, useState } from "react";
import { BsFillPlayFill, BsPauseFill } from "react-icons/bs";

import { MealMP4 } from "../../constants";
import "./Intro.css";

const Intro = () => {
  const [playVideo, setPlayVideo] = useState(false);
  const vidRef = useRef<HTMLVideoElement>(null);

  return (
    <div className="app__video">
      <video ref={vidRef} src={MealMP4} controls={false} loop muted />

      <div className="app__video-overlay flex__center">
        <div
          className="app__video-overlay_circle flex__center"
          onClick={() => {
            setPlayVideo(!playVideo);

            if (vidRef.current) {
              if (playVideo) {
                vidRef.current.pause();
              } else {
                vidRef.current.play();
              }
            }
          }}
        >
          {playVideo ? (
            <BsPauseFill color="#fff" fontSize={30} />
          ) : (
            <BsFillPlayFill color="#fff" fontSize={30} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Intro;
