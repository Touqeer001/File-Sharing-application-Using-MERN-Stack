import "./App.css";
import { uploadFile } from "./Services/api";
import images from "./resize-image.png";
import { useRef, useState, useEffect } from "react"; //react me virtual dom ka concept hota h .virtual dom ke liye useRef ka used krte h...

function App() {
  const [file, setFile] = useState("");
  const [result, setResult] = useState("");
  const fileInputUseRef = useRef(); //declaration of use ref....
  const onUploadClick = () => {
    fileInputUseRef.current.click();
  };
  //console.log(file);
  useEffect(() => {
    const getImage = async () => {
      if (file) {
        const data = new FormData();
        data.append("name", file.name);
        data.append("file", file);
        let response = await uploadFile(data);
        setResult(response.path);
      }
    };
    getImage();
  }, [file]);

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
        <a href={result} target="_blank">
          {result}
        </a>
      </div>
    </div>
  );
}

export default App;
