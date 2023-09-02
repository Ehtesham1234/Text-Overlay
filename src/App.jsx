// // src/App.js
// import React, { useState } from "react";
// import "./App.css";
// import ImageGallery from "./ImageGallery";
// import OverlayText from "./OverlayText";

// function App() {
//   const [selectedImage, setSelectedImage] = useState(null);

//   const handleImageClick = (imageUrl) => {
//     setSelectedImage(imageUrl);
//   };

//   return (
//     <div className="App">
//       <h1>Image Overlay App</h1>
//       <div className="container">
//         <ImageGallery onImageClick={handleImageClick} />
//         {selectedImage && <OverlayText imageUrl={selectedImage} />}
//       </div>
//     </div>
//   );
// }

// export default App;

// import React, { useState } from "react";
// import "./App.css";
// import ImageDisplay from "./ImageGallery";
// import TextInput from "./OverlayText";

// function App() {
//   const [imageUrl, setImageUrl] = useState("");
//   const [textOverlays, setTextOverlays] = useState([]);

//   const addTextOverlay = (text) => {
//     setTextOverlays([...textOverlays, { text, id: Date.now() }]);
//   };

//   return (
//     <div className="App">
//       <h1>Image Text Overlay</h1>
//       <ImageDisplay imageUrl={imageUrl} textOverlays={textOverlays} />
//       <TextInput setImageUrl={setImageUrl} addTextOverlay={addTextOverlay} />
//     </div>
//   );
// }

// export default App;
import React, { useState } from "react";
import "./App.css";
import ImageDisplay from "./ImageGallery";
import TextInput from "./OverlayText";

function App() {
  const [imageUrl, setImageUrl] = useState("");
  const [textOverlays, setTextOverlays] = useState([]);

  const addTextOverlay = (text) => {
    setTextOverlays([
      ...textOverlays,
      { text, id: Date.now(), width: 200, height: 50 },
    ]);
  };

  const updateTextOverlay = (id, updatedOverlay) => {
    setTextOverlays((prevOverlays) =>
      prevOverlays.map((overlay) =>
        overlay.id === id ? { ...overlay, ...updatedOverlay } : overlay
      )
    );
  };

  return (
    <div className="App">
      <h1>Image Text Overlay</h1>
      <ImageDisplay
        imageUrl={imageUrl}
        textOverlays={textOverlays}
        updateTextOverlay={updateTextOverlay}
      />
      <TextInput setImageUrl={setImageUrl} addTextOverlay={addTextOverlay} />
    </div>
  );
}

export default App;
