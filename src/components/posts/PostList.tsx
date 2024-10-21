'use client'

import { useMemo, useState } from 'react'
import { IPost, ITag, TagEnum } from 'src/types'

import { cn } from '@/utils/cn'

import Badge from '../common/Badge'
import PostTimeline from './PostTimeline'

type Props = {
  posts: IPost[]
  tags: ITag[]
}

const PostList = ({ posts, tags }: Props) => {
  const [currentTag, setCurrentTag] = useState<string>(TagEnum.All)

  const postsByTagYear = useMemo(() => {
    const postsByTag =
      currentTag === TagEnum.All
        ? posts
        : posts.filter((post) => post.frontmatter.tag === currentTag)
    let postsByYear: Record<number, IPost[]> = {}

    postsByTag.forEach((post) => {
      const postYear = post.frontmatter.date.getFullYear()
      if (postsByYear[postYear]) postsByYear[postYear].push(post)
      else postsByYear[postYear] = [post]
    })

    return postsByYear
  }, [currentTag])

  return (
    <>
      <div className="mb-6 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <Badge
            key={tag.value}
            content={`#${tag.label}`}
            className={cn(tag.value === currentTag && 'bg-secondary')}
            onClick={() => setCurrentTag(tag.value)}
          />
        ))}
      </div>

      <PostTimeline postsByTagYear={postsByTagYear} />
    </>
  )
}

export default PostList
