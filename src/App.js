import React from 'react';
import './App.css';

/*global NDEFReader*/
async function readTag(){

  if ("NDEFReader" in window) {

    const reader = new NDEFReader();

    try {
      await reader.scan();

      reader.onreading = event => {

        const decoder = new TextDecoder();

        for (const record of event.message.records) {

          if(record.recordType == 'url' && decoder.decode(record.data).substring(0, 4) == 'http'){
            fillImg(decoder.decode(record.data));
          }
          if(decoder.decode(record.data).substring(0, 4) != 'http'){
            consoleLog("\n" + decoder.decode(record.data) + "\n" );
          }
          //consoleLog("\n" + decoder.decode(record.data) + "\n" );
        }
      }
    } catch(error) {
      consoleLog(error);
    }
  } else {
    consoleLog("Web NFC is not supported.");
  }
}

/*global NDEFWriter*/
async function writeTag() {
  if ("NDEFWriter" in window) {
    const writer = new NDEFWriter();
    try {
      await writer.write("What Web Can Do Today");
      consoleLog("NDEF message written!");
    } catch(error) {
      consoleLog(error);
    }
  } else {
    consoleLog("Web NFC is not supported.");
  }
}

function consoleLog(data) {
  var logElement = document.getElementById('log');
  logElement.innerHTML += data + '\n' + '</br>';
};

function fillImg(data) {
  var linkImg = document.getElementById('fillImg');
  linkImg.src = data;
};


function App() {
  return (
    <div className="app text-center">
      <h4>Scann your NFC-Tag</h4>
      <div className="img">
        <img id="fillImg" src="" class="img-fluid rounded" alt=""></img>
      </div>
      <p>Logs:</p>
      <div className="divlog">
        <div id="log"></div>
      </div>
      <button type="button" className="btn" onClick={readTag}><span className="iconify" data-icon="ic-baseline-nfc" data-inline="false"></span></button>
    </div>
  );
}

export default App;
