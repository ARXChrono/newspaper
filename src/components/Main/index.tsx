import styles from "./styles.module.scss"
import Article from "../../../@types/Article"

interface main {
  featured?: Article
  articles: Article[]
}

const Main = ({ articles, featured }: main) => (
  <main className={styles.main}>
    {featured && (
      <article className={styles.featured}>
        <div className={styles["featured-body"]}>
          <h2 className={styles.heading}>{featured.head}</h2>
          <p>{featured.teaser}</p>
          <p className={styles.author}>{featured.byline.text}</p>
        </div>
        {featured?.image && (
          <div className={styles["featured-img-wrap"]}>
            <img
              className={styles["featured-img"]}
              src={`/images/${featured.image}`}
            />
          </div>
        )}
      </article>
    )}
    {articles.map((article) => (
      <p>{article.head}</p>
    ))}
  </main>
)

export default Main
