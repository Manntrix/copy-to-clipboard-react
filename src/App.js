import { toast } from "react-toastify";
import { useRef } from "react";
import copy from "copy-to-clipboard";
import "./App.css";

function App() {
  const textRef = useRef();

  //Function to add text to clipboard
  const copyToClipboard = () => {
    // Text from the html element
    let copyText = textRef.current.value;
    // Adding text value to clipboard using copy function
    let isCopy = copy(copyText);

    //Dispalying notification
    if (isCopy) {
      toast.success("Copied to Clipboard");
    }
  };

  return (
    <div className="App">
      <input value="Text to copy" disabled type="text" ref={textRef} />

      <button onClick={copyToClipboard}>Copy</button>

      <br />
      <br />
      <textarea placeholder="Paste here the copied text"></textarea>
    </div>
  );
}

export default App;
