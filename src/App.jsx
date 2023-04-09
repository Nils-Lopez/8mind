  import logo from "./cover-ghost-raise-final.jpg";

import 'bulma/css/bulma.min.css';
import './App.css';



import React, {useState, useRef} from "react"

import waveform from "./waveform.mp4"



import spotify from "./spotify.svg"
import pause from "./pause-solid.svg"

function App({param}) {
  const [isPlaying, setIsPlaying] = useState(true)
  const [displayOthers, setDisplayOthers] = useState(false)
  const vidRef = useRef(null);
  const handlePlayVideo = () => {
    vidRef.current.play();
    setIsPlaying(true)
  }


  return (
    <div className="App">

        <div className="container mt-2 pt-5 pb-5">
        <img src={logo} className="cover" alt="COVER GHOSTRAISE" />


          <div className="container mt-5">


            <h2 className="title is-1 songname shadow">GHOSTRAISE</h2>
                        <h1 className="title is-4 octo7">OCTO7</h1>

          </div>
          
          <div className="container mt-4">

         
          <div className="container btn-ctn mt-0 mb-2 pt-0">
            <div className="columns is-flex links mt-0 pt-0  pb-0 mb-0">
              <div className="column is-half mb-0 pb-0">
                            <a href="https://youtu.be/na72mqSpklw" className="button mt-5 btn-links">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className="icon mr-2">
<path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"/></svg>
              <strong>YOUTUBE</strong>
            </a>
              </div>
              <div className="column is-half pb-0 mb-0">
                            <a href="https://open.spotify.com/album/7fSWh6k2r0FQ2oJ8SphAMG?si=0paQIzpBTpiybYg7tMMpxw" className="button mt-5 btn-links">
              
              <svg xmlns="http://www.w3.org/2000/svg" className="icon mr-2" viewBox="0 0 496 512"><path d="M248 8C111.1 8 0 119.1 0 256s111.1 248 248 248 248-111.1 248-248S384.9 8 248 8zm100.7 364.9c-4.2 0-6.8-1.3-10.7-3.6-62.4-37.6-135-39.2-206.7-24.5-3.9 1-9 2.6-11.9 2.6-9.7 0-15.8-7.7-15.8-15.8 0-10.3 6.1-15.2 13.6-16.8 81.9-18.1 165.6-16.5 237 26.2 6.1 3.9 9.7 7.4 9.7 16.5s-7.1 15.4-15.2 15.4zm26.9-65.6c-5.2 0-8.7-2.3-12.3-4.2-62.5-37-155.7-51.9-238.6-29.4-4.8 1.3-7.4 2.6-11.9 2.6-10.7 0-19.4-8.7-19.4-19.4s5.2-17.8 15.5-20.7c27.8-7.8 56.2-13.6 97.8-13.6 64.9 0 127.6 16.1 177 45.5 8.1 4.8 11.3 11 11.3 19.7-.1 10.8-8.5 19.5-19.4 19.5zm31-76.2c-5.2 0-8.4-1.3-12.9-3.9-71.2-42.5-198.5-52.7-280.9-29.7-3.6 1-8.1 2.6-12.9 2.6-13.2 0-23.3-10.3-23.3-23.6 0-13.6 8.4-21.3 17.4-23.9 35.2-10.3 74.6-15.2 117.5-15.2 73 0 149.5 15.2 205.4 47.8 7.8 4.5 12.9 10.7 12.9 22.6 0 13.6-11 23.3-23.2 23.3z"/></svg>
              <strong>SPOTIFY</strong>
            </a>
              </div>
            </div>   

               <div className="columns is-block links mt-0 pt-0">
                    {!displayOthers ? <div className="column is-12 mt-1 pt-0">
                      <button className="button mt-4 btn-links" onClick={() => setDisplayOthers(true)}>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="icon icnsmall mr-2">
<path d="M494.8 47c12.7-3.7 20-17.1 16.3-29.8S494-2.8 481.2 1L51.7 126.9c-9.4 2.7-17.9 7.3-25.1 13.2C10.5 151.7 0 170.6 0 192v4V304 448c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V192c0-35.3-28.7-64-64-64H218.5L494.8 47zM368 240a80 80 0 1 1 0 160 80 80 0 1 1 0-160zM80 256c0-8.8 7.2-16 16-16h96c8.8 0 16 7.2 16 16s-7.2 16-16 16H96c-8.8 0-16-7.2-16-16zM64 320c0-8.8 7.2-16 16-16H208c8.8 0 16 7.2 16 16s-7.2 16-16 16H80c-8.8 0-16-7.2-16-16zm16 64c0-8.8 7.2-16 16-16h96c8.8 0 16 7.2 16 16s-7.2 16-16 16H96c-8.8 0-16-7.2-16-16z"/></svg>
              <strong>OTHERS..</strong>
            </button>
                    </div> : <>
                    <div className="column is-12 mt-1 pt-0">
                      <a href="https://music.apple.com/us/album/ghostraise-single/1680827098" className="button mt-4 btn-links" onClick={() => setDisplayOthers(true)}>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" className="icon icnsmall mb-1 mr-2">
<path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/></svg>
              <strong>MUSIC</strong>
            </a>
                    </div> 
                    <div className="column is-12 pt-0">
                      <a href="https://deezer.page.link/Xxq93xA1CNAUKrfT8" className="button mt-2 btn-links" onClick={() => setDisplayOthers(true)}>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className="icon">
<path d="M451.46,244.71H576V172H451.46Zm0-173.89v72.67H576V70.82Zm0,275.06H576V273.2H451.46ZM0,447.09H124.54V374.42H0Zm150.47,0H275V374.42H150.47Zm150.52,0H425.53V374.42H301Zm150.47,0H576V374.42H451.46ZM301,345.88H425.53V273.2H301Zm-150.52,0H275V273.2H150.47Zm0-101.17H275V172H150.47Z"/></svg>
              <strong>DEEZER</strong>
            </a>
                    </div> 
                    </>}
               </div>

          </div>
          <Video isPlaying={isPlaying} setIsPlaying={setIsPlaying}/>
          </div>
         
        </div>
    </div>
  );
}

export const Video = () => {
  const videoRef = useRef();
  const [stop, setStop] = useState(false);

  const handleVideo = () => {
      setStop(!stop);
      if (stop === true) {
          videoRef.current.pause();
      } else {
          videoRef.current.play();
      }
  };

  return (
      <div onClick={handleVideo}>
           <video
        ref={videoRef}
        src={waveform}
        type="video/mp4"
        className="soundwave mt-3 video "
      />
      {!stop ? <svg xmlns="http://www.w3.org/2000/svg" onClick={() => videoRef.current.play()} className="icon pause mt-1" viewBox="0 0 512 512"><path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM188.3 147.1c7.6-4.2 16.8-4.1 24.3 .5l144 88c7.1 4.4 11.5 12.1 11.5 20.5s-4.4 16.1-11.5 20.5l-144 88c-7.4 4.5-16.7 4.7-24.3 .5s-12.3-12.2-12.3-20.9V168c0-8.7 4.7-16.7 12.3-20.9z"/></svg> :      <svg xmlns="http://www.w3.org/2000/svg" onClick={() => videoRef.current.pause()} className="icon pause mt-1" viewBox="0 0 320 512"><path d="M48 64C21.5 64 0 85.5 0 112V400c0 26.5 21.5 48 48 48H80c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H48zm192 0c-26.5 0-48 21.5-48 48V400c0 26.5 21.5 48 48 48h32c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H240z"/></svg>
 }
        
      </div>
       
      
    
  );
};



export default App;
