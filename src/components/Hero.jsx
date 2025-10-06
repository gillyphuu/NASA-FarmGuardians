import React from 'react'

export default function Hero(){
  return (
    <header className="hero">
      <div className="hero-inner">
        <div className="hero-left">
          <div className="logo">
            <img src="/farmGuardians.png" alt="Farm Guardians logo"/>
            <div className="titles">
              <h1>🌱 Farm Guardians: NASA Agro Challenge</h1>
              <p className="subtitle">Learn how to save your crops using real NASA data.</p>
            </div>
          </div>

          <p className="lead">An educational game that teaches sustainable farming using real satellite data.</p>

          <div className="cta">
            <button className="btn">🎮 Play Demo</button>
            <button className="btn">📘 Learn about the project</button>
            <button className="btn outline">🧠 Learn with NASA Data</button>
          </div>
        </div>

        <div className="hero-right">
          <div className="scene">
            {/* Nubes animadas */}
            <div className="clouds">
              <div className="cloud c1"/>
              <div className="cloud c2"/>
              <div className="cloud c3"/>
            </div>

            {/* Imagen estática del equipo */}
            <img className="hero-image" src="/equipoo.jpg" alt="Farm Guardians team" />

            {/* Plantitas animadas en primer plano */}
            <div className="plants">
              <div className="plant p1">🌱</div>
              <div className="plant p2">🌿</div>
              <div className="plant p3">🌾</div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
