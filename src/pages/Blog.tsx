import { Link } from 'react-router-dom'
import { posts } from '../data/posts'

export default function Blog() {
  return (
    <>
      <div className="section">
        <div className="section-title">alle innlegg</div>
        <ul className="post-list">
          {posts.map((post) => (
            <li key={post.slug}>
              <span className="post-date">{post.date}</span>
              <span className="post-tag">[{post.tag}]</span>
              <Link to={`/blog/${post.slug}`} className="post-title">
                {post.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}
