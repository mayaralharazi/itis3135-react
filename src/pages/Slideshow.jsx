import { useEffect, useState } from "react";

function Slideshow() {
  const [images, setImages] = useState([]);
  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(false);

  // fetch images
  useEffect(() => {
    fetch("https://api.thecatapi.com/v1/images/search?limit=10")
      .then((res) => res.json())
      .then((data) => setImages(data));
  }, []);

  // play slideshow
  useEffect(() => {
    let interval;

    if (playing && images.length > 0) {
      interval = setInterval(() => {
        setIndex((prev) => (prev + 1) % images.length);
      }, 5000);
    }

    return () => clearInterval(interval);
  }, [playing, images]);

  if (images.length === 0) return <p>Loading...</p>;

  return (
    <main>
      <h2>Slideshow</h2>

      <img
        src={images[index].url}
        alt="cat"
        style={{ width: "300px", borderRadius: "10px" }}
      />

      <div style={{ marginTop: "15px" }}>
        <button onClick={() => setIndex(0)}>First</button>
        <button onClick={() => setIndex((index - 1 + images.length) % images.length)}>
          Previous
        </button>
        <button onClick={() => setIndex((index + 1) % images.length)}>
          Next</button>
        <button onClick={() => setIndex(images.length - 1)}>Last</button>

        <br /><br />

        <button onClick={() => setPlaying(true)}>Play</button>
        <button onClick={() => setPlaying(false)}>Stop</button>
      </div>
    </main>
  );
}

export default Slideshow;
