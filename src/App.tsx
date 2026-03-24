import { Routes, Route, Navigate } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import { posts } from './data/posts'
import Blog from './pages/Blog'
import BlogPost from './pages/BlogPost'
import Projects from './pages/Projects'
import About from './pages/About'
import SpitfireBlueprint from './pages/SpitfireBlueprint'
import HenrikBlueprint from './pages/HenrikBlueprint'

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={posts.length > 0 ? <Home /> : <Navigate to="/about" replace />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/blueprint/spitfire" element={<SpitfireBlueprint />} />
        <Route path="/blueprint/henrik" element={<HenrikBlueprint />} />
      </Route>
    </Routes>
  )
}

export default App
