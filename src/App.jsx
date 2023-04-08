import logo from "./cover-ghost-raise-final.jpg";

import 'bulma/css/bulma.min.css';
import './App.css';

import {useState} from "react"

function App({param}) {
  const [origin, setOrigin] = useState('')

  switch(param) {
    case "":
      setOrigin('insta')
      break;
    case "ghostraise":
      setOrigin('streaming')
      break
    case "last":
      setOrigin('ytb')
      break
  }

  return (
    <div className="App">
        <div className="container mt-5 pt-5">
          <div className="container">
            <h1 className="title is-5 mb-2">OCTO7</h1>
            <h2 className="title is-2">GHOSTRAISE</h2>

          </div>
          <div className="container">
            <img src={logo} alt="COVER GHOSTRAISE" />
          </div>
        </div>
    </div>
  );
}

export default App;
