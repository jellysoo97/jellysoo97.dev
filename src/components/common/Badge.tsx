import React from 'react'

import { cn } from '@/utils/cn'
import { tagColor, tagLabel } from '@/constants/index'

type Props = {
  content: string
  type?: 'tag' | 'button'
} & React.ComponentProps<'div'>

const Badge = ({ content, type = 'button', className, ...props }: Props) => {
  return (
    <div
      className={cn(
        'flex w-fit items-center justify-center rounded border border-neutral-300 px-2 py-1 dark:border-neutral-700',
        'cursor-pointer text-size-small',
        className
      )}
      style={{
        borderColor: type === 'tag' ? tagColor[content] : '',
        color: type === 'tag' ? tagColor[content] : '',
      }}
      {...props}
    >
      {type === 'tag' ? tagLabel[content] : content}
    </div>
  )
}

export default Badge
