interface ArticleContentBlock {
  type: string
  text?: string
  url?: string
  items?: string[]
}

export type ArticleSubject = 'ورزشی' | 'تاریخی' | 'پزشکی' | 'آشپزی'

export interface Article {
  id: number
  title: string
  author: string
  source: string
  subject: ArticleSubject
  summary: string
  main_img: string
  content: ArticleContentBlock[]
}

export type ButtonVarient = 'primary' | 'secondary' | 'danger' | 'success'