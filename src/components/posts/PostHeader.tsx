import { IFrontmatter } from 'src/types'

import Title from '@/components/common/Title'
import { DateFormatTypeEnum, formatDate } from '@/utils/format-date'
import Badge from '../common/Badge'

type Props = {
  frontmatter: IFrontmatter
}

const PostHeader = ({ frontmatter }: Props) => {
  return (
    <div className="flex flex-col gap-y-2">
      <p className="mr-2 text-secondary text-size-small">
        {formatDate(frontmatter.date, DateFormatTypeEnum.DateOnlyWithDot)}
      </p>
      <div className="flex items-center gap-x-2">
        <Badge type="tag" content={frontmatter.tag} />
        <Title>{frontmatter.title}</Title>
      </div>
      <p className="text-secondary text-size-small">
        {frontmatter.description}
      </p>
    </div>
  )
}

export default PostHeader
