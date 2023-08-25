import Album from "./Album";

export default function AlbumList({ albums }) {
  // console.log(albums);
  return (
    <div>
      <h3 className="text-3xl">Album List</h3>
      {albums.map((album, i) => (
        <Album {...album} key={i}></Album>
      ))}
    </div>
  );
}
