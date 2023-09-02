// // src/components/ImageGallery.js
// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const API_KEY = "m_tpXQ10NYQMeaAEJifbwBILhFR2lZKc5rw5TZQFqoo";
// const API_URL = `https://api.unsplash.com/photos/random?count=10&client_id=${API_KEY}`;

// const ImageGallery = ({ onImageClick }) => {
//   const [image, setImage] = useState(null);

//   useEffect(() => {
//     axios
//       .get(API_URL)
//       .then((response) => {
//         setImage(response.data[0]);
//       })
//       .catch((error) => {
//         console.error('Error fetching image:', error);
//       });
//   }, []);

//   return (
//     <div className="image-gallery">
//       {image && (
//         <img
//           src={image.urls.regular}
//           alt={image.alt_description || 'Unsplash Image'}
//           onClick={() => onImageClick(image.urls.regular)}
//         />
//       )}
//     </div>
//   );
// };

// export default ImageGallery;
import React, { useState } from "react";
import Draggable from "react-draggable";
import { Resizable } from "react-resizable";

function ImageDisplay({ imageUrl, textOverlays, updateTextOverlay }) {
  const [editingOverlayId, setEditingOverlayId] = useState(null);

  const handleOverlayClick = (id) => {
    setEditingOverlayId(id);
  };

  const handleOverlayBlur = () => {
    setEditingOverlayId(null);
  };

  return (
    <div className="image-display">
      {imageUrl && (
        <div className="image-div">
          <img src={imageUrl} alt="Fetched" className="fetched-image" />
        </div>
      )}
      {textOverlays.map((overlay) => (
        <Draggable
          key={overlay.id}
          defaultPosition={{ x: 0, y: 0 }}
          bounds="parent"
        >
          <Resizable
            width={overlay.width}
            height={overlay.height}
            minConstraints={[100, 50]}
            maxConstraints={[400, 100]}
            onResizeStop={(e, data) => {
              updateTextOverlay(overlay.id, {
                text: overlay.text,
                width: data.size.width,
                height: data.size.height,
              });
            }}
          >
            <div
              className={`text-overlay ${
                editingOverlayId === overlay.id ? "editable" : ""
              }`}
              contentEditable={editingOverlayId === overlay.id}
              onClick={() => handleOverlayClick(overlay.id)}
              onBlur={() => handleOverlayBlur()}
            >
              {overlay.text}
            </div>
          </Resizable>
        </Draggable>
      ))}
    </div>
  );
}

export default ImageDisplay;
