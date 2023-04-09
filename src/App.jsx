  import logo from "./cover-ghost-raise-final.jpg";

import 'bulma/css/bulma.min.css';
import './App.css';



import {useState} from "react"



function App({param}) {
  const [origin, setOrigin] = useState('')

  if (origin === "") {
      switch(param) {
    
    case "ghostraise":
      setOrigin('streaming')
      break
    case "last":
      setOrigin('ytb')
      break
    default:
      setOrigin('insta')
      break;
  }
  }
  


  return (
    <div className="App">

        <div className="container mt-5 pt-5">

          <div className="container">


            <h2 className="title is-2 songname">GHOSTRAISE</h2>
                        <h1 className="title is-5 octo7">OCTO7</h1>

          </div>
          <div className="container mt-1">
            <img src={logo} className="cover" alt="COVER GHOSTRAISE" />
            <div className="container btn-ctn">
            <div className="columns is-flex links pb-0 mb-0">
              <div className="column is-half mb-0 pb-0">
                            <button className="button mt-5 btn-links">
              <strong>YOUTUBE</strong>
            </button>
              </div>
              <div className="column is-half pb-0 mb-0">
                            <button className="button mt-5 btn-links">
              <strong>SPOTIFY</strong>
            </button>
              </div>
            </div>   

               <div className="columns links mt-0 pt-0">
                    <div className="column is-12 mt-1 pt-0">
                      <button className="button mt-4 btn-links">
              <strong>OTHERS..</strong>
            </button>
                    </div>
               </div>

          </div>
          </div>
         
        </div>
    </div>
  );
}

export default App;
