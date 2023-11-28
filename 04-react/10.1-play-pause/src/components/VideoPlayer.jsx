import React, { useRef } from 'react'

import './VideoPlayer.css'

function VideoPlayer(props) {

  const videoRef = useRef();

  const play = () => {
    videoRef.current.play();
  }

  const pause = () => {
    videoRef.current.pause();
  }

  let isPlaying = false;
  const playPause = () => {
    isPlaying = !isPlaying;
    {isPlaying ? play() : pause()};
  }

  return (
    <section>
      <video ref={videoRef}>
        <source src={props.source} type="video/mp4"/>
      </video>

      <div id='video-overlay'>
        <button onClick={play}>Play</button>
        <button onClick={playPause}>Play/Pause</button>
        <button onClick={pause}>Pause</button>
      </div>

    </section>
  )
}

export default VideoPlayer