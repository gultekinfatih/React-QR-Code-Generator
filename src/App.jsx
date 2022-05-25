import QRCode from "qrcode";
import { useState } from "react";

function App() {
  const [url, setUrl] = useState("");
  const [qrcode, setQrcode] = useState("");

  const GenerateQRCode = () => {
    QRCode.toDataURL(
      url,
      {
        width: 800,
        margin: 2,
      },
      (err, url) => {
        if (err) return console.error(err);

        // console.log(url);
        setQrcode(url);
      }
    );
  };

  return (
    <div className="App">
      <h1>QR Code Generator</h1>
      <input
        type="text"
        placeholder="e.g. https://github.com"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />

      <button onClick={GenerateQRCode} className="glow-on-hover" type="button">
        Generate
      </button>

      {qrcode && (
        <>
          <img src={qrcode} />
          <a href={qrcode} download="qrcode.png" className="glow-on-hover">
            Download
          </a>
        </>
      )}
    </div>
  );
}

export default App;
