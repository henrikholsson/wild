import { Link } from 'react-router-dom'
import { posts } from '../data/posts'
import { projects } from '../data/projects'

export default function Home() {
  return (
    <>  
      <div className="section">
        <ul className="post-list">
          {posts.slice(0, 5).map((post) => (
            <li key={post.slug}>
              <span className="post-date">{post.date}</span>
              <Link to={`/blog/${post.slug}`}>{post.title}</Link>
            </li>
          ))}
        </ul>
      </div>

      {projects.length > 0 && (
        <div className="section">
          <div className="section-title">prosjekter</div>
          <ul className="project-list">
            {projects.slice(0, 4).map((p) => (
              <li key={p.name}>
                <span className="project-name">{p.name}</span>
                <span className="project-desc">— {p.description}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  )
}
