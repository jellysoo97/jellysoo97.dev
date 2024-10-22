import { DEFAULT_TAG_COLOR } from '@/constants/index'
import { calculatePercentage } from '@/utils/calculate-percentage'
import { cn } from '@/utils/cn'
import { IPost, ITag } from 'src/types'

interface IBarGraphData {
  item: string
  percentage: number
  color: string
}

type Props = {
  posts: IPost[]
  tags: ITag[]
}

const BarGraph = ({ posts, tags }: Props) => {
  const barGraphData: IBarGraphData[] = tags
    .map((tag) => ({
      item: tag.label,
      percentage: calculatePercentage({
        value: tag.postCount,
        total: posts.length,
      }),
      color: tag.color || DEFAULT_TAG_COLOR,
    }))
    .filter((data) => data.percentage > 0)
    .sort((a, b) => b.percentage - a.percentage)

  return (
    <div className="flex flex-col gap-y-3">
      <div className={cn('flex h-2 w-full', 'overflow-hidden rounded-lg')}>
        {barGraphData.map((data, index) => (
          <div
            key={data.item}
            className={cn(
              'h-full',
              index < posts.length - 1 &&
                data.percentage > 0 &&
                data.percentage < 100 &&
                'border-r-2 border-r-neutral-200 dark:border-r-neutral-800'
            )}
            style={{
              width: `${data.percentage}%`,
              backgroundColor: data.color,
            }}
          />
        ))}
      </div>

      <ul className="flex flex-wrap items-center gap-3">
        {barGraphData.map((data) => (
          <li key={data.item} className="flex items-center">
            <div
              className={cn('h-3 w-3 rounded-full', 'mr-1')}
              style={{ backgroundColor: data.color }}
            />
            <span className="mr-1 text-size-small">{data.item}</span>
            <span className="text-xs text-secondary">
              {data.percentage.toFixed(1)}%
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default BarGraph
