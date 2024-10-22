interface IConfig {
  title: string
  description: string
  author: Record<string, string>
  url: Record<string, string>
  og: Record<string, string>
}

export const siteConfig: IConfig = {
  title: 'jellysoo97.dev',
  description: '배운 지식과 생각을 정리하는 공간입니다.',
  author: {
    name: 'jellysoo97',
    email: 'jellysoo97@gmail.com',
  },
  url: {
    author: 'https://github.com/jellysoo97',
    github: 'https://github.com/jellysoo97/jellysoo97.dev',
    blog: 'https://jellysoo97.dev.vercel.app',
  },
  og: {
    javascript: '/images/og/javascript.png',
  },
}
