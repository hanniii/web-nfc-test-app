import React from 'react';
//import logo from './logo.svg';
import './App.css';
import 'nfc.js';

function App() {
  return (
    <div className="App">
        <div class="wrapper">

          <h1 class="p-3">Scann your NFC Tag: </h1>

          <div class="nfc-image w-50" id="nfccard">
            <p>nfc logo</p>
          </div>

          <p>
            <button onclick="readTag()">Test NFC Read</button>
            <button onclick="writeTag()">Test NFC Write</button>
          </p>
          <pre id="log"></pre>
          <p>Copyright &copy; All rights reserved | Hanna Zalami 2020</p>

        </div>
    </div>
  );
}

export default App;
