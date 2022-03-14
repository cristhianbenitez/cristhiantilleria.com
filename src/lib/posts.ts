import { serialize } from "next-mdx-remote/serialize"
import fs from "fs"
import path from "path"
import matter from "gray-matter"
import { postFilePaths, POSTS_PATH } from "@/utils/mdxUtils"

const postsDirectory = path.join(process.cwd(), `blog`)

export function getSortedPostsData() {
  const fileNames = fs.readdirSync(postsDirectory)

  const allPostsData = fileNames.map((fileName) => {
    const id = fileName.replace(/\.mdx$/, ``)

    const fullPath = path.join(postsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, `utf8`)

    const matterResult = matter(fileContents)

    return {
      id,
      ...matterResult.data,
    }
  })

  return allPostsData.sort((a: any, b: any) => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    if (a.date < b.date) {
      return 1
    } else {
      return -1
    }
  })
}

export function getAllPostSlugs() {
  const paths = postFilePaths
    // Remove file extensions for page paths
    .map((path) => path.replace(/\.mdx?$/, ""))
    // Map the path into the static paths object required by Next.js
    .map((slug) => ({ params: { slug } }))

  return paths
}

export async function getPostData(slug: string) {
  const postFilePath = path.join(POSTS_PATH, `${slug}.mdx`)
  const source = fs.readFileSync(postFilePath)

  const { content, data } = matter(source)

  const mdxSource = await serialize(content, {
    // Optionally pass remark/rehype plugins
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: [],
    },
    scope: data,
  })
  return { source: mdxSource, frontMatter: data }
}
