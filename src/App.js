import React from 'react';
import './App.css';

/*global NDEFReader*/
async function readTag(){
  var nfcImg;
  if ("NDEFReader" in window) {
    const reader = new NDEFReader();
    try {
      await reader.scan();
      reader.onreading = event => {
        const decoder = new TextDecoder();
        for (const record of event.message.records) {
          if(record.recordType == 'url' && decoder.decode(record.data).substring(0, 4) == 'file'){
            nfcImg = decoder.decode(record.data).substring(7,);
            consoleLog("nfcImg: " + nfcImg);
          }
          //consoleLog("Record type:  " + record.recordType);
          //consoleLog("MIME type:    " + record.mediaType);
          consoleLog("\n" + decoder.decode(record.data));
        }
        //consoleLog("nfcImg: " + nfcImg);
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

function App() {
  return (
    <div className="app text-center">
      <div className="img cen">
        <img src="{nfcImg}" class="img-fluid rounded" alt=""></img>
      </div>
      <div className="divlog">
        <div id="log"></div>
      </div>
      <h3>Scann your NFC Tag: </h3>
      <button type="button" className="btn" onClick={readTag}>Scannen</button>
      <button type="button" className="btn" onClick={writeTag}>Schreiben</button>
    </div>
  );
}

export default App;
//<img src="{nfcImg}" class="img-fluid rounded" alt=""></img>