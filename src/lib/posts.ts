import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const postsDir = path.join(process.cwd(), 'src/content/posts')

export type Post = {
  slug: string
  title: string
  date: string
  category: string
  excerpt: string
  coverImage: string
  readTime: string
}

export function getPostBySlug(slug: string): { post: Post; content: string } | null {
  const filePath = path.join(postsDir, `${slug}.mdx`)
  if (!fs.existsSync(filePath)) return null
  const raw = fs.readFileSync(filePath, 'utf8')
  const { data, content } = matter(raw)
  return {
    post: {
      slug,
      title: data.title,
      date: data.date,
      category: data.category,
      excerpt: data.excerpt,
      coverImage: data.coverImage ?? '',
      readTime: data.readTime,
    },
    content,
  }
}

export function getAllPosts(): Post[] {
  const files = fs.readdirSync(postsDir).filter(f => f.endsWith('.mdx'))

  return files
    .map(filename => {
      const slug = filename.replace('.mdx', '')
      const raw = fs.readFileSync(path.join(postsDir, filename), 'utf8')
      const { data } = matter(raw)

      return {
        slug,
        title: data.title,
        date: data.date,
        category: data.category,
        excerpt: data.excerpt,
        coverImage: data.coverImage ?? '',
        readTime: data.readTime,
      }
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}
