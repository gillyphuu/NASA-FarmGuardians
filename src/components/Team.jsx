import React from 'react'

const members = [
  {name:'Henry ', role:'Unity XR & Gameplay'},
  {name:'Gustavo ', role:'Unity XR & Gameplay'},
  {name:'Glina ', role:'UI/UX & Interactive Tutorial'},
  {name:'Piero ', role:'NASA Data Integration & Visualization'},
  {name:'Milton ', role:'NASA Data Integration & Visualization'}
]

export default function Team(){
  return (
    <section className="team" id="team">
  <h2>The Guardians Team 👩‍🚀👨‍🌾</h2>
  <p>We are a multidisciplinary team committed to environmental education and using scientific data for a sustainable future.</p>

      <div className="team-grid">
        {members.map(m => (
          <div className="member" key={m.name}>
            <div className="avatar">{m.name.charAt(0)}</div>
            <div className="meta">
              <strong>{m.name}</strong>
              <span>{m.role}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
