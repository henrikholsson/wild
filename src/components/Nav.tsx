import { NavLink } from 'react-router-dom'
import { useTheme } from '../hooks/useTheme'
import { projects } from '../data/projects'

export default function Nav() {
  const { theme, toggle } = useTheme()

  return (
    <nav>
      <div className="nav-links">
        <NavLink to="/">home</NavLink>
        {projects.length > 0 && (
          <>
            <span className="sep">/</span>
            <NavLink to="/projects">projects</NavLink>
          </>
        )}
        <span className="sep">/</span>
        <NavLink to="/about">about</NavLink>
      </div>
      <button className="theme-toggle" onClick={toggle}>
        {theme === 'dark' ? 'light' : 'dark'}
      </button>
    </nav>
  )
}
