import { projects } from '../data/projects'

export default function Projects() {
  return (
    <>
      <div className="section">
        <div className="section-title">prosjekter</div>
        <div className="projects-grid">
          {projects.map((p) => (
            <div className="project-card" key={p.name}>
              <h3>{p.name}</h3>
              <p>{p.description}</p>
              <div className="tech">{p.tech}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
