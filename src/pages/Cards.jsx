function Cards() {
  return (
    <main>
      <h2>Jolly Dolphin Cards</h2>

      <p>
        These cards are part of my Jolly Dolphin theme. Each card represents a role
        in an ocean-inspired world where dolphins help with coding, creativity, and security.
      </p>

      <section id="playing-cards">
        <div className="playing-card">
          <div className="left">A♠</div>
          <div className="middle">
            <div>🌊</div>
            <div>🌊</div>
            <div>🌊</div>
          </div>
          <div className="right">A♠</div>
          <p className="card-title">Wave Master</p>
        </div>

        <div className="playing-card">
          <div className="left">K♥</div>
          <div className="middle">
            <div>🐬</div>
            <div>🐬</div>
            <div>🐬</div>
          </div>
          <div className="right">K♥</div>
          <p className="card-title">Dolphin Leader</p>
        </div>

        <div className="playing-card">
          <div className="left">7♦</div>
          <div className="middle">
            <div>🐚</div>
            <div>🐚</div>
            <div>🐚</div>
          </div>
          <div className="right">7♦</div>
          <p className="card-title">Ocean Treasure</p>
        </div>

        <div className="playing-card">
          <div className="left">J♣</div>
          <div className="middle">
            <div>🦀</div>
            <div>🦀</div>
            <div>🦀</div>
          </div>
          <div className="right">J♣</div>
          <p className="card-title">Sea Defender</p>
        </div>
      </section>
    </main>
  );
}

export default Cards;
