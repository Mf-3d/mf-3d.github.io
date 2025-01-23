export type Card = {
  title: string,
  image?: string,
  description?: string,
  contents: CardContent[],
}

type CardContent = {
  type: string,
  links?: {
    title: string,
    url: string,
  }[],
  text?: string
}