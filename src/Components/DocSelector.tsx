import React, { useState, useEffect } from "react";
import { PortsGlobal, LOCAL_SERVER_URL } from "../ServerDataDefinitions";
import "./DocSelector.css";

interface DocSelectorProps {
  onDocumentSelect: (documentName: string) => void;
}

function DocSelector({ onDocumentSelect }: DocSelectorProps) {
  const [docs, setDocs] = useState<string[]>([]);
  const [newDocName, setNewDocName] = useState<string>("");

  const serverPort = PortsGlobal.serverPort;
  const url = `${LOCAL_SERVER_URL}:${serverPort}/documents`;

  useEffect(() => {
    (async () => {
      const response = await fetch(url);
      const data = await response.json();
      setDocs(data);
    })();
  }, [url]);

  function onCreateHandler(input: string) {
    if (input === "") {
      alert("document name cannot be empty");
      return;
    }
    if (docs.includes(input)) {
      alert("document already exists");
      return;
    }
    onDocumentSelect(input);
  }

  return (
    <div>
      <h1>Create a new document</h1>
      <input placeholder="enter a new doc name" type="text" value={newDocName} onChange={(e)=>{setNewDocName(e.target.value)}}/>
      <button onClick={()=>{onCreateHandler(newDocName)}}>Create</button>
      <h1>Select a document</h1>
      <div className="doc-select-button-container">
        {docs.map((doc: string) => {
          return (
            <button className="doc-select-button" key={doc} onClick={() => onDocumentSelect(doc)}>
              {doc}
            </button>
          );
        })}
      </div>
      <h4>reminder: documents will not refresh if user name is empty</h4>
    </div>
  );
}

export default DocSelector;
