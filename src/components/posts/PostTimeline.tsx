import Link from 'next/link'
import { IPost } from 'src/types'

import { tagLabel } from '@/constants/index'
import { DateFormatTypeEnum, formatDate } from '@/utils/format-date'
import Divider from '../common/Divider'

type Props = {
  postsByTagYear: Record<number, IPost[]>
}

const PostTimeline = ({ postsByTagYear }: Props) => {
  return (
    <>
      {Object.entries(postsByTagYear).map(([year, posts]) => (
        <div key={year} className="flex gap-x-4">
          <div>
            <h3 className="text-secondary">{year}</h3>
          </div>

          <Divider direction="vertical" />

          <ul>
            {posts.map(({ frontmatter }) => (
              <li key={frontmatter.url}>
                <Link
                  href={frontmatter.url}
                  className="flex items-center gap-x-2"
                >
                  <span className="text-secondary text-size-small">
                    {formatDate(
                      frontmatter.date,
                      DateFormatTypeEnum.MonthAndDayWithDot
                    )}
                  </span>
                  [{tagLabel[frontmatter.tag]}] {frontmatter.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </>
  )
}

export default PostTimeline
