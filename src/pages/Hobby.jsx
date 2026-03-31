import { useEffect } from "react";

function Hobby() {
  useEffect(() => {
    const links = document.querySelectorAll("nav a[data-page]");
    const pages = document.querySelectorAll("section.page");

    function showPage(id) {
      pages.forEach((p) => p.classList.remove("active"));
      const page = document.getElementById(id);
      if (page) page.classList.add("active");
    }

    links.forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const id = link.getAttribute("data-page");
        showPage(id);
        window.history.replaceState(null, "", "#" + id);
      });
    });

    const start = window.location.hash.replace("#", "") || "what";
    showPage(start);
  }, []);

  return (
    <main>
      <h2>Hobby</h2>

      <header>
        <h1>Instant Photography</h1>
      </header>

      <nav>
        <a href="#what" data-page="what">What</a> ☼
        <a href="#who" data-page="who">Who</a> ☼
        <a href="#when" data-page="when">When</a> ☼
        <a href="#where" data-page="where">Where</a> ☼
        <a href="#how" data-page="how">How</a> ☼
        <a href="#why" data-page="why">Why</a> ☼
        <a href="#ai" data-page="ai">AI Prompts</a>
      </nav>

      <section id="what" className="page active">
        <h2>What</h2>
        <p>I enjoy instant photography because it helps me notice details that I usually miss. I like taking pictures of places, small objects, and moments that feel special.</p>
        <p>My favorite style is simple and clean photos. I try to focus on lighting and the main subject instead of adding too many things.</p>
        <ul>
          <li>I enjoy saving memories in a physical form.</li>
          <li>I like the soft and nostalgic look of instant photos.</li>
          <li>I enjoy photographing travel, friends, and small details.</li>
        </ul>
      </section>

      <section id="who" className="page">
        <h2>Who</h2>
        <p>My name is Mayar, and I like instant photography as a creative break from coding and studying. It gives me a way to enjoy small moments and keep them in a real printed form.</p>
        <p>I enjoy taking instant photos when I travel or when I walk around campus and Charlotte. It feels more personal because the photo comes out right away.</p>
      </section>

      <section id="when" className="page">
        <h2>When</h2>
        <p>The best time for instant photography is usually golden hour, right after sunrise or before sunset. The light looks softer and warmer, which makes photos look more beautiful.</p>
      </section>

      <section id="where" className="page">
        <h2>Where</h2>
        <p>I like taking instant photos in parks, on campus, and in city areas with interesting buildings.</p>
      </section>

      <section id="how" className="page">
        <h2>How</h2>
        <p>I start by choosing a subject, then I try different angles and distance.</p>
      </section>

      <section id="why" className="page">
        <h2>Why</h2>
        <p>Instant photography helps me keep memories, especially when I travel.</p>
      </section>

      <section id="ai" className="page">
        <h2>AI Prompts</h2>
        <p><strong>AI model used:</strong> ChatGPT.</p>
      </section>

      <footer>
        <p>Page created by Mayar Alharazi</p>
      </footer>
    </main>
  );
}

export default Hobby;