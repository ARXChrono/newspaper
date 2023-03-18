export default interface Article {
  id: String
  byline: {
    text: String
  }
  head: String
  teaser: String
  image?: String
}
