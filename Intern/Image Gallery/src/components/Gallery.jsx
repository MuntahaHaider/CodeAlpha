import React, { useState } from "react";
import { data } from "./ImagesData";
import "./Gallery.css";

const Gallery = () => {
  const [imageModel, setImageModel] = useState(false);
  const [tempImgSrc, setTempImgSrc] = useState("");

  const getImg = (imageUrl) => {
    setTempImgSrc(imageUrl);
    setImageModel(true);
  };

  const closeModel = () => {
    setImageModel(false);
    setTempImgSrc("");
  };

  return (
    <>
      {/* Modal */}
      <div className={imageModel ? "model open" : "model"}>
        <button className="close-btn" onClick={closeModel}>
          &times;
        </button>
        <img src={tempImgSrc} alt="Selected" />
      </div>

      {/* Image Gallery */}
      <div className="gallery">
        {data.map((e, i) => (
          <div className="pics" key={i} onClick={() => getImg(e.imageUrl)}>
            <img src={e.imageUrl} alt={`Gallery-${i}`} />
          </div>
        ))}
      </div>
    </>
  );
};

export default Gallery;
