import React from 'react'

export default function DataSection(){
  return (
    <section className="data" id="data">
      <h2>Data & Science</h2>
      <p>Each game is fed with open satellite data from NASA POWER, showing how real conditions affect agricultural productivity.</p>

      <div className="data-grid">
        <div className="metric">
          <h3>T2M</h3>
          <p>Temperature (°C) — influences growth and frost risk.</p>
        </div>
        <div className="metric">
          <h3>PRECTOT</h3>
          <p>Total precipitation — water availability and irrigation planning.</p>
        </div>
        <div className="metric">
          <h3>NDVI</h3>
          <p>Vegetation index — crop health and expected productivity.</p>
        </div>
      </div>

      <div className="map-placeholder">
        <img className="data-image" src="/image.jpg" alt="NDVI map" />
      </div>
    </section>
  )
}
