import React from 'react';
import './App.css';
//import Tweet from './tweet';


function App() {
  
  const scanNFC = () => {
    console.log("Scanne NFC");
  }

  const writeNFC = () => {
    console.log("Schreibe NFC");
  }

  return (
    <div className="app">

      <h1 class="p-3">Scann your NFC Tag: </h1>

      <div class="nfc-image w-50" id="nfccard">
        <p>NFC Logo</p>
      </div>

      <p>
        <button onClick={scanNFC}>Test NFC Read</button>
        <button onClick={writeNFC}>Test NFC Write</button>
      </p>
      <pre id="log"></pre>

      <p>Copyright &copy; All rights reserved | Hanna Zalami 2020</p>
    </div>
  );
}

export default App;



//<h1>Hello React</h1>
//<Tweet name="Dev ED"/>
//<Tweet name="John Snow"/>*/