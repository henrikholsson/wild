import { useParams, Link } from 'react-router-dom'
import Markdown from 'react-markdown'
import { posts } from '../data/posts'

export default function BlogPost() {
  const { slug } = useParams()
  const post = posts.find((p) => p.slug === slug)

  if (!post) {
    return (
      <div>
        <Link to="/" className="back-link">&lt; tilbake</Link>
        <p>Innlegget ble ikke funnet.</p>
      </div>
    )
  }

  return (
    <div className="blog-post">
      <Link to="/" className="back-link">&lt; tilbake</Link>
      <div className="post-header">
        <h1>{post.title}</h1>
        <div className="post-meta">
          {post.date}
          <span className="post-tag">[{post.tag}]</span>
        </div>
      </div>
      <div className="post-body">
        <Markdown>{post.body}</Markdown>
      </div>
    </div>
  )
}
