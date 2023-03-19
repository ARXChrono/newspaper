export default interface Article {
  id: string
  byline: {
    text: string
  }
  head: string
  teaser: string
  image?: string
  hideImage?: boolean
}
