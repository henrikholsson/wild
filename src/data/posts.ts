export interface Post {
  slug: string
  title: string
  date: string
  tag: string
  body: string
}

function parseFrontmatter(raw: string) {
  const match = raw.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/)
  if (!match) return { data: {} as Record<string, string>, content: raw }
  const data: Record<string, string> = {}
  for (const line of match[1].split('\n')) {
    const i = line.indexOf(':')
    if (i > 0) data[line.slice(0, i).trim()] = line.slice(i + 1).trim()
  }
  return { data, content: match[2] }
}

const files = import.meta.glob('/content/posts/*.md', {
  eager: true,
  query: '?raw',
  import: 'default',
}) as Record<string, string>

export const posts: Post[] = Object.entries(files)
  .map(([path, raw]) => {
    const slug = path.replace('/content/posts/', '').replace('.md', '')
    const { data, content } = parseFrontmatter(raw)
    return {
      slug,
      title: data.title,
      date: data.date,
      tag: data.tag,
      body: content,
    }
  })
  .sort((a, b) => b.date.localeCompare(a.date))
