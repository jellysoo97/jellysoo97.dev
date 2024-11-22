import { TagEnum } from 'src/types'

export const tagLabel: Record<string, string> = {
  [TagEnum.All]: '전체글',
  [TagEnum.JavaScript]: 'JavaScript',
  [TagEnum.TroubleShooting]: '트러블슈팅',
  [TagEnum.Project]: '프로젝트',
  [TagEnum.Network]: '네트워크',
  [TagEnum.CA]: '컴퓨터구조',
  [TagEnum.Web]: 'Web',
  [TagEnum.React]: 'React',
  [TagEnum.HTML]: 'HTML',
}

export const DEFAULT_TAG_COLOR = '#D84924'

export const tagColor: Record<string, string> = {
  [TagEnum.JavaScript]: '#E9A41A', //'#F0DB4F',
  [TagEnum.TroubleShooting]: DEFAULT_TAG_COLOR,
  [TagEnum.Project]: '#D946EF',
  [TagEnum.Network]: '#5CB85C',
  [TagEnum.CA]: '#A9A9A9',
  [TagEnum.Web]: '#5CB85C',
  [TagEnum.React]: '#5ABDFB',
  [TagEnum.HTML]: '#D84924',
  // [TagEnum.Nextjs]: '#434343',
  // [TagEnum.Css]: '#764ABC',
  // [TagEnum.Typescript]: '#027ACD',
  // [TagEnum.Algorithm]: '#D58A67',
  // [TagEnum.Os]: '#A97FFD',
  // [TagEnum.JobApply]: '#E86C6C',
  // [TagEnum.ComputerArchitecture]: '#f472b6',
  // [TagEnum.Git]: '#6D7982',
  // [TagEnum.Retrospect]: '',
}
