import axios from "axios";
import { useState } from "react";
import "./App.css";

function App() {
  const [image, setImage] = useState(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(image);
    if (image) {
      axios
        .post("", image)
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="file"
          placeholder="Please provide a image"
          onChange={(e) => setImage(e.target.files[0])}
        />
        <button type="submit">SUBMIT</button>
      </form>
    </div>
  );
}

export default App;
