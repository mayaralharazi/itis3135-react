import { useState } from "react";

function Hobby() {
  const [page, setPage] = useState("what");

  const showPage = (id) => {
    setPage(id);
    window.history.replaceState(null, "", "#" + id);
  };

  return (
    <main>
      <h2>Instant Photography</h2>

      <div className="hobby-nav">
        <button onClick={() => showPage("what")}>What</button>
        <button onClick={() => showPage("who")}>Who</button>
        <button onClick={() => showPage("when")}>When</button>
        <button onClick={() => showPage("where")}>Where</button>
        <button onClick={() => showPage("how")}>How</button>
        <button onClick={() => showPage("why")}>Why</button>
        <button onClick={() => showPage("ai")}>AI Prompts</button>
      </div>

      {page === "what" && (
        <section className="hobby-section">
          <h3>What</h3>
          <p>I enjoy instant photography because it helps me notice details that I usually miss. I like taking pictures of places, small objects, and moments that feel special.</p>
          <p>My favorite style is simple and clean photos. I try to focus on lighting and the main subject instead of adding too many things.</p>
          <ul>
            <li>I enjoy saving memories in a physical form.</li>
            <li>I like the soft and nostalgic look of instant photos.</li>
            <li>I enjoy photographing travel, friends, and small details.</li>
          </ul>
        </section>
      )}

      {page === "who" && (
        <section className="hobby-section">
          <h3>Who</h3>
          <p>My name is Mayar, and I like instant photography as a creative break from coding and studying. It gives me a way to enjoy small moments and keep them in a real printed form.</p>
          <p>I enjoy taking instant photos when I travel or when I walk around campus and Charlotte. It feels more personal because the photo comes out right away.</p>
          <ul>
            <li>Students can enjoy it as a fun hobby.</li>
            <li>Travelers can use it to save memories.</li>
            <li>Creative people can enjoy the artistic side of it.</li>
          </ul>
        </section>
      )}

      {page === "when" && (
        <section className="hobby-section">
          <h3>When</h3>
          <p>The best time for instant photography is usually golden hour, right after sunrise or before sunset. The light looks softer and warmer, which makes photos look more beautiful.</p>
          <p>Cloudy days can also be great because the lighting is softer and shadows are not harsh. This helps the photo look balanced and clear.</p>
          <ul>
            <li>Sunset gives warm and soft colors.</li>
            <li>Morning light makes photos look fresh and calm.</li>
            <li>Cloudy weather helps avoid harsh shadows.</li>
          </ul>
        </section>
      )}

      {page === "where" && (
        <section className="hobby-section">
          <h3>Where</h3>
          <p>I like taking instant photos in parks, on campus, and in city areas with interesting buildings. These places give me different backgrounds and moods.</p>
          <p>Sometimes the best spots are simple places like a coffee shop, a walkway, or a quiet street. Small places can still make beautiful photos.</p>
          <ul>
            <li>Parks are great for natural light and greenery.</li>
            <li>Campus has many nice study and walking areas.</li>
            <li>City streets add texture and character to photos.</li>
          </ul>
        </section>
      )}

      {page === "how" && (
        <section className="hobby-section">
          <h3>How</h3>
          <p>I start by choosing a subject, then I try different angles and distance. I also pay attention to the background so the photo does not look too busy.</p>
          <p>After that, I do small edits if needed, like cropping or adjusting brightness in digital copies. For instant photos, I mostly focus on taking the best shot from the start.</p>
          <ul>
            <li>Choose a clear subject first.</li>
            <li>Test different angles before taking the photo.</li>
            <li>Use natural light when possible.</li>
          </ul>
        </section>
      )}

      {page === "why" && (
        <section className="hobby-section">
          <h3>Why</h3>
          <p>Instant photography helps me keep memories, especially when I travel or experience something new. It feels special because I can hold the photo in my hand right away.</p>
          <p>It also makes me feel proud when I capture a photo that looks clean and meaningful. Even simple photos can become important memories later.</p>
          <ul>
            <li>It helps me save memories in a real way.</li>
            <li>It makes everyday moments feel more special.</li>
            <li>It gives me a creative hobby outside of schoolwork.</li>
          </ul>
        </section>
      )}

      {page === "ai" && (
        <section className="hobby-section">
          <h3>AI Prompts</h3>
          <p><strong>AI model used:</strong> ChatGPT. I used ChatGPT to help organize the structure of this hobby page, improve the wording, design the HTML layout, suggest CSS styling, and assist with the JavaScript.</p>
          <ul>
            <li>Create a single-page hobby website using HTML with sections for What, Who, When, Where, How, Why, and AI Prompts.</li>
            <li>Write simple student-style paragraphs explaining an instant photography hobby.</li>
            <li>Create JavaScript that hides all sections except the one selected in the navigation menu.</li>
            <li>Help create embedded CSS styling that follows CRAP design principles.</li>
          </ul>
        </section>
      )}
    </main>
  );
}

export default Hobby;
