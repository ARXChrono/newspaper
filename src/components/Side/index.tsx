import styles from "./styles.module.scss"
import Article from "../../../@types/Article"

interface Side {
  featured: String
  articles: Article[]
}

const Side = ({ articles }: Side) => (
  <aside className={styles.aside}>
    {articles.map((article) => (
      <p>{article.head}</p>
    ))}
  </aside>
)

export default Side
