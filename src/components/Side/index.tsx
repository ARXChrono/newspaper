import styles from "./styles.module.scss"
import Article from "../../../@types/Article"

interface Side {
  featured?: Article
  articles: Article[]
}

const Side = ({ articles, featured }: Side) => (
  <aside className={styles.aside}>
    {featured && (
      <article className={styles.featured}>
        {featured?.image && (
          <div className={styles["featured-img-wrap"]}>
            <a href="#" className="link">
              <img
                className={styles["featured-img"]}
                src={`/images/${featured.image}`}
                alt={featured.head}
              />
            </a>
          </div>
        )}
        <div className={styles["featured-body"]}>
          <a href="#" className="link">
            <h2 className={styles.heading}>{featured.head}</h2>
          </a>
          <p className={styles.author}>{featured.byline.text}</p>
        </div>
      </article>
    )}

    {articles.map((article) => (
      <article key={`side-article-${article.id}`} className={styles.article}>
        <a href="#" className="link">
          <h3 className={styles.heading}>{article.head}</h3>
        </a>
      </article>
    ))}
  </aside>
)

export default Side
