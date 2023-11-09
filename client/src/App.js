import "./App.css";
import images from "./images.png";
import { useRef, useState } from "react"; //react me virtual dom ka concept hota h .virtual dom ke liye useRef ka used krte h

function App() {
  const [file, setFile] = useState("");
  const fileInputUseRef = useRef(); //declaration of use ref
  const onUploadClick = () => {
    fileInputUseRef.current.click();
  };
  console.log(file);
  return (
    <div className="container">
      <img src={images} alt="Image not found"></img>

      <div className="Wrapper">
        <h1>Simple File Sharing!</h1>
        <p>Upload and share the Download Link</p>
        <button onClick={() => onUploadClick()}>Upload</button>
        <input
          type="file"
          ref={fileInputUseRef}
          style={{ display: "none" }}
          onChange={(e) => setFile(e.target.files[0])}
        ></input>
      </div>
    </div>
  );
}

export default App;
