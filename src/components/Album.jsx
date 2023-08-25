import { useState } from "react";

export default function TestAlbum({ name, songs }) {
  const [showAlbum, setShowAlbum] = useState(false);

  return (
    <div className="p-4">
      <button onClick={() => setShowAlbum((prevState) => !prevState)}>
        {showAlbum ? "Hide album" : "Show album"}
      </button>
      {showAlbum && (
        <>
          <h4 className="text-xl">{name}</h4>
          <ul>
            {songs.map((song) => (
              <li className="text-left">{song}</li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}
