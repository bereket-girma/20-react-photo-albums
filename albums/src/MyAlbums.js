import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./App.css";
function MyAlbums() {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/albums").then((item) => {
      setAlbums(item.data);
    });
  }, []);

  console.log(albums);

  return (
  <div>
  <h3>My Albums</h3>
    <div className="container">
    
        {albums.map((item) => (
      <div className="grid">
          <Link to={`/albums/${item.id}`} style={{ textDecoration: 'none' }}>
            <img src={item.thumb} />
            <p className="title" key={item.id}>
              {item.AlbumTitle}
            </p>
          </Link>
      </div>
        ))}
    </div>
    </div>
  );
}

export default MyAlbums;
