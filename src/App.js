import { useState } from "react";
import streamToBlob from "stream-to-blob";
import "./styles.css";
import ytdl from "ytdl-core";

export default function App() {
  const [ytUrl, setUrl] = useState(null);
  return (
    <div className="App">
      <h1 className="heading">My Own YouTube Downloader !</h1>
      <input
        className="URL-input"
        placeholder="Video URL e.g. https://www.youtube.com/watch?v=MtN1YnoL46Q"
        onChange={(e) => setUrl(e.target.value)}
      />
      <button
        className="convert-button"
        onClick={async () => {
          // const stream = new stream.Readable()
          // https://www.youtube.com/watch?v=AACGbCOqSmo
          const file = await ytdl(ytUrl);
          const blob = await streamToBlob(file, "mp4");
        }}
      >
        Convert
      </button>
    </div>
  );
}
