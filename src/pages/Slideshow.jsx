import { useEffect, useState } from "react";

function Slideshow() {
  const [images, setImages] = useState([]);
  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(false);

  // fetch images from API
  useEffect(() => {
    fetch("https://api.thecatapi.com/v1/images/search?limit=10")
      .then((res) => res.json())
      .then((data) => setImages(data));
  }, []);

  // autoplay logic
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
      <div
        style={{
          backgroundColor: "#f5f5f5",
          padding: "30px",
          borderRadius: "15px",
          maxWidth: "600px",
          margin: "40px auto",
          textAlign: "center",
          boxShadow: "0 4px 10px rgba(0,0,0,0.1)"
        }}
      >
        <h2 style={{ color: "#d63384" }}>Slideshow</h2>

        <img
          src={images[index].url}
          alt="cat"
          style={{
            width: "350px",
            borderRadius: "15px",
            marginTop: "10px",
            boxShadow: "0 4px 10px rgba(0,0,0,0.2)"
          }}
        />

        <div style={{ marginTop: "20px" }}>
          <button className="slide-btn" onClick={() => setIndex(0)}>
            First
          </button>

          <button
            className="slide-btn"
            onClick={() =>
              setIndex((index - 1 + images.length) % images.length)
            }
          >
            Previous
          </button>

          <button
            className="slide-btn"
            onClick={() => setIndex((index + 1) % images.length)}
          >
            Next
          </button>

          <button
            className="slide-btn"
            onClick={() => setIndex(images.length - 1)}
          >
            Last
          </button>

          <br />
          <br />

          <button
            className="slide-btn play"
            onClick={() => setPlaying(true)}
          >
            Play
          </button>

          <button
            className="slide-btn stop"
            onClick={() => setPlaying(false)}
          >
            Stop
          </button>
        </div>
      </div>
    </main>
  );
}

export default Slideshow;
