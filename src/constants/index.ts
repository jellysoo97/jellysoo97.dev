import { TagEnum } from 'src/types'

export const tagLabel: Record<string, string> = {
  [TagEnum.All]: '전체글',
  [TagEnum.JavaScript]: 'JavaScript',
  [TagEnum.TroubleShooting]: '트러블슈팅',
  [TagEnum.Project]: '프로젝트',
  [TagEnum.Network]: '네트워크',
  [TagEnum.CA]: '컴퓨터구조',
}

export const DEFAULT_TAG_COLOR = '#e34c26'

export const tagColor: Record<string, string> = {
  [TagEnum.JavaScript]: '#F0DB4F',
  [TagEnum.TroubleShooting]: DEFAULT_TAG_COLOR,
  [TagEnum.Project]: '#f472b6',
  [TagEnum.Network]: '#9BCF53',
  [TagEnum.CA]: '#c2c2c2',
  // [TagEnum.Nextjs]: '#000000',
  // [TagEnum.ModernJavascriptDeepDive]: '',
  // [TagEnum.Css]: '#563d7c',
  // [TagEnum.HTML]: '#e34c26',
  // [TagEnum.React]: '#61DAFB',
  // [TagEnum.Typescript]: '#007acc',
  // [TagEnum.Algorithm]: '#EFBC9B',
  // [TagEnum.Os]: '#BEADFA',
  // [TagEnum.JobApply]: '#FA7070',
  // [TagEnum.ComputerArchitecture]: '#f472b6',
  // [TagEnum.Git]: '#424c54',
  // [TagEnum.Retrospect]: '',
}
