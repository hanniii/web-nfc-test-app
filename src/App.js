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
          consoleLog("Record type:  " + record.recordType);
          //document.getElementById("log").innerHTML = "Record type:  " + record.recordType;
          consoleLog("MIME type:    " + record.mediaType);
          //document.getElementById("log").innerHTML = "MIME type:    " + record.mediaType;
          consoleLog("=== data ===\n" + decoder.decode(record.data));
          //document.getElementById("log").innerHTML = "=== data ===\n" + decoder.decode(record.data);
        }
      }
    } catch(error) {
      consoleLog(error);
      //document.getElementById("log").innerHTML = "Error";
    }
  } else {
    consoleLog("Web NFC is not supported.");
    //document.getElementById("log").innerHTML = "Web NFC is not supported.";
  }
}

/*global NDEFWriter*/
async function writeTag() {
  if ("NDEFWriter" in window) {
    const writer = new NDEFWriter();
    try {
      await writer.write("What Web Can Do Today");
      consoleLog("NDEF message written!");
      //document.getElementById("log").innerHTML = "NDEF message written!";
    } catch(error) {
      consoleLog(error);
      //document.getElementById("log").innerHTML = "Error";
    }
  } else {
    consoleLog("Web NFC is not supported.");
    //document.getElementById("log").innerHTML = "Web NFC is not supported.";
  }
}

function consoleLog(data) {
  var logElement = document.getElementById('log');
  logElement.innerHTML += data + '\n' + '</br>';
};

function App() {
  return (
    <div className="app">
      <h1>Scann your NFC Tag: </h1>
      <button onClick={readTag}>Scannen</button>
      <button onClick={writeTag}>Schreiben</button>
      <p id="log"></p>
    </div>
  );
}

export default App;