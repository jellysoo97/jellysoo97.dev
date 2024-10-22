import { getPosts } from './get-posts'

export const getPost = async (url: string) => {
  const posts = await getPosts()
  const currentPost = posts.find((post) => post.frontmatter.url === url)

  if (!currentPost) {
    return { currentPost: null, prevPost: null, nextPost: null }
  }

  const currentIndex = posts.indexOf(currentPost)

  return {
    currentPost,
    prevPost:
      currentIndex === posts.length - 1 ? null : posts[currentIndex + 1],
    nextPost: currentIndex === 0 ? null : posts[currentIndex - 1],
  }
}
