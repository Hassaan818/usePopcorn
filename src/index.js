import React from "react";
import ReactDOM from "react-dom/client";
import './index.css';
// import App from './App.js';
import App from './App-v2'
// import StarRating from "./StarRating";

// function Test() {
//   const [movieRating, setMovieRating] = useState(0);
//   return (
//     <div>
//       <StarRating color="blue" onSetMovieRating={setMovieRating}/>
//       <p>This rating of this movie was {movieRating}</p>
//     </div>
//   );
// }

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    {/* <App /> */}
  </React.StrictMode>
);
