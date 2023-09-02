// // src/components/OverlayText.js
// import React, { useState } from "react";
// import Draggable from "react-draggable";

// const OverlayText = ({ imageUrl }) => {
//   const [text, setText] = useState("");
//   const [position, setPosition] = useState({ x: 0, y: 0 });

//   const handleTextChange = (e) => {
//     setText(e.target.value);
//   };

//   const handleDrag = (e, data) => {
//     setPosition({ x: data.x, y: data.y });
//   };

//   return (
//     <div className="overlay-text">
//       <input
//         type="text"
//         placeholder="Add text overlay"
//         value={text}
//         onChange={handleTextChange}
//       />
//       <div className="image-container">
//         <img src={imageUrl} alt="Selected" />
//         <Draggable
//           position={position}
//           onStop={(e, data) => {
//             setPosition({ x: data.x, y: data.y });
//           }}
//         >
//           <div
//             className="overlay"
//             style={{ top: position.y, left: position.x }}
//           >
//             {text}
//           </div>
//         </Draggable>
//       </div>
//     </div>
//   );
// };

// export default OverlayText;
import React, { useState } from "react";
import axios from "axios";

function TextInput({ setImageUrl, addTextOverlay }) {
  const [customText, setCustomText] = useState("");

  const fetchImage = async () => {
    try {
      const response = await axios.get(
        "https://api.unsplash.com/photos/random",
        {
          params: {
            client_id: "m_tpXQ10NYQMeaAEJifbwBILhFR2lZKc5rw5TZQFqoo",
          },
        }
      );
      setImageUrl(response.data.urls.regular);
    } catch (error) {
      console.error("Error fetching image", error);
    }
  };

  return (
    <div className="text-input">
      <button onClick={fetchImage}>Fetch Image</button>
      <input
        type="text"
        placeholder="Enter custom text"
        value={customText}
        onChange={(e) => setCustomText(e.target.value)}
      />
      <button onClick={() => addTextOverlay(customText)}>Add Text</button>
    </div>
  );
}

export default TextInput;
