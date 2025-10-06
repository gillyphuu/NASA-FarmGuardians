import React from 'react'

export default function About(){
  return (
    <section className="about" id="about">
      <h2>About the game</h2>
      <p>Farm Guardians combines science and fun. It uses temperature (T2M), precipitation (PRECTOT) and vegetation (NDVI) data to make smart farming decisions.</p>

      <div className="about-grid">
        <div className="media">
          <video className="about-video" src="/video-vr.mp4" autoPlay muted loop playsInline />
        </div>

        <ul className="features">
          <li>🛰️ Real NASA data</li>
          <li>🌾 Sustainable crop management</li>
          <li>🧩 Dynamic climate challenges</li>
          <li>🧭 Science-based decision making</li>
        </ul>
      </div>
    </section>
  )
}
