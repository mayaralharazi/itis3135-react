import { useEffect, useState } from "react";

function Slideshow() {
  const [images, setImages] = useState([]);
  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    fetch("https://api.thecatapi.com/v1/images/search?limit=10")
      .then((res) => res.json())
      .then((data) => setImages(data));
  }, []);

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
      <h2 style={{ textAlign: "center", color: "#d63384" }}>Slideshow</h2>

      <div style={{ textAlign: "center" }}>
        <img
          src={images[index].url}
          alt="cat"
          style={{
            width: "350px",
            borderRadius: "15px",
            boxShadow: "0 4px 10px rgba(0,0,0,0.2)"
          }}
        />
      </div>

      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <button className="slide-btn" onClick={() => setIndex(0)}>First</button>
        <button className="slide-btn" onClick={() => setIndex((index - 1 + images.length) % images.length)}>Previous</button>
        <button className="slide-btn" onClick={() => setIndex((index + 1) % images.length)}>Next</button>
        <button className="slide-btn" onClick={() => setIndex(images.length - 1)}>Last</button>

        <br /><br />

        <button className="slide-btn play" onClick={() => setPlaying(true)}>Play</button>
        <button className="slide-btn stop" onClick={() => setPlaying(false)}>Stop</button>
      </div>
    </main>
  );
}

export default Slideshow;
