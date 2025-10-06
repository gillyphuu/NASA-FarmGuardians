import React from 'react'

function Card({title, icon, children}){
  return (
      <div className="challenge-card">
      <div className="card-icon">{icon}</div>
      <h3>{title}</h3>
      <p>{children}</p>
      <button className="btn small">See more</button>
    </div>
  )
}

export default function Challenges(){
  return (
    <section className="challenges" id="challenges">
      <h2>Main Challenges</h2>
      <div className="cards">
        <Card title="Hydro-0 Code" icon={<span>💧</span>}>
          Manage water in the face of an unexpected drought.
        </Card>

        <Card title="Frost Protocol" icon={<span>❄️</span>}>
          Face frosts and decide on thermal protection measures.
        </Card>

        <Card title="Insecta Swarm X" icon={<span>🐛</span>}>
          Control pest outbreaks using biotechnology or chemical defenses.
        </Card>
      </div>
    </section>
  )
}
