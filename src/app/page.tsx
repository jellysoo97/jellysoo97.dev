import BarGraph from '@/components/BarGraph'
import Title from '@/components/common/Title'
import PostList from '@/components/posts/PostList'

import { siteConfig } from '@/constants/config'
import { getPosts } from '@/utils/get-posts'
import { getTags } from '@/utils/get-tags'
import { Metadata } from 'next'

export async function generateMetadata(): Promise<Metadata> {
  const DEFAULT_IMAGE = '/images/og.png'
  const { title, description, author, url } = siteConfig
  const posts = await getPosts()
  const tags = getTags(posts).map((tag) => tag.label)

  return {
    title,
    description,
    authors: author,
    keywords: tags,
    openGraph: {
      type: 'website',
      title,
      description,
      url: url.blog,
      images: [DEFAULT_IMAGE],
    },
    // https://nextjs.org/docs/app/api-reference/functions/generate-metadata#verification
    verification: {
      google: 'T0o_UVusJmu1IYqZ8sLjUxVXUYhSgiAycDrv4laE_wQ',
    },
  }
}

export default async function HomePage() {
  // https://stackoverflow.com/questions/64926174/module-not-found-cant-resolve-fs-in-next-js-application
  const posts = await getPosts()
  const tags = getTags(posts)

  return (
    <div className="flex w-full flex-col gap-y-8">
      <section>
        <BarGraph posts={posts} tags={tags} />
      </section>
      <section className="flex flex-col gap-y-3">
        <Title>Posts</Title>
        <PostList posts={posts} tags={tags} />
      </section>
    </div>
  )
}
