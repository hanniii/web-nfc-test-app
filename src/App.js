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
            fillText(decoder.decode(record.data));
          }
          consoleLog("\n" + decoder.decode(record.data) + "\n" );
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

function fillText(data) {
  var text = document.getElementById('fillText');
  text.innerHTML += data + '</br>';
};

function App() {
  return (
    <div className="app text-center">
      <div className="img">
        <img id="fillImg" src="" class="img-fluid rounded" alt=""></img>
      </div>
      <h3 className="fillText"></h3>
      <button type="button" className="btn" onClick={readTag}>Scannen</button>
      <div className="divlog">
        <div id="log"></div>
      </div>
    </div>
  );
}

export default App;
/*
    <div className="app text-center">
      <div className="img">
        <img id="fillImg" src="" class="img-fluid rounded" alt=""></img>
      </div>
      <h3 className="fillText"></h3>
      <h3>Scann your NFC Tag: </h3>
      <button type="button" className="btn" onClick={readTag}>Scannen</button>
      <button type="button" className="btn" onClick={writeTag}>Schreiben</button>
      <div className="divlog">
        <div id="log"></div>
      </div>
    </div>
*/