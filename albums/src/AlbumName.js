import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
// import "./App.css";
import "./albumName.css"

function AlbumName(props) {
  const [pictures, setPictures] = useState([]);
  const [albums, setAlbums] = useState([]);
  const { id } = useParams();
  // const [albums] = useState(albums.albums);
  useEffect(() => {
    axios.get(`http://localhost:3000/albums/${id}`).then((item) => {
      console.log(item);
      setPictures(item.data.pictures);
    });
    axios.get("http://localhost:3000/albums").then((item) => {
      setAlbums(item.data);
    });
  }, [id]);

  //MODAL
  const [activePhoto, setActivePhoto] = useState(null)
  console.log(activePhoto)

  return (
    <div>
    {activePhoto ? (
      <div className="modal" onClick={() => setActivePhoto(null)}>
        <h4>{activePhoto.title}</h4>
        <img src={activePhoto.src}/>
      </div>
    ) : null}  
    
    <h3>Album Name</h3>
    <div className="container">
    

      <div className="sidebar">
        <ul>
          {albums.map((item) => {
            return (
              <Link to={`/albums/${item.id}`} style={{ textDecoration: 'none' }}>
                <li className="sideLink">{item.AlbumTitle}</li>
              </Link>
            );
          })}
        </ul>
      </div>

      <div className="image">
        {pictures.map((item) => (
          <div onClick={() => setActivePhoto(item)}>
            <img src={item.src} />
            <p className="phototitle" key={item.id}>
              {item.title}
            </p>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}

export default AlbumName;
