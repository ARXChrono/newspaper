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
          <a href="#" className="link">
            <h2 className={styles["featured-heading"]}>{featured.head}</h2>
          </a>
          <p className={styles.teaser}>{featured.teaser}</p>
          <p className={styles.author}>{featured.byline.text}</p>
        </div>
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
      </article>
    )}
    {articles && (
      <div className={styles["article-wrap"]}>
        {articles.map((article) => (
          <article
            key={`main-article-${article.id}`}
            className={`${styles.article} ${
              article?.hideImage ? styles.half : null
            }`}
          >
            {article?.image && !article?.hideImage && (
              <div className={styles["article-img-wrap"]}>
                {" "}
                <a href="#" className="link">
                  <img
                    className={styles["article-img"]}
                    src={`/images/${article.image}`}
                    alt={article.head}
                  />
                </a>
              </div>
            )}
            <div className={`${styles["article-body"]}`}>
              <a href="#" className="link">
                <h2 className={styles.heading}>{article.head}</h2>
              </a>
              <p className={styles.teaser}>{article.teaser}</p>
              <p className={styles.author}>{article.byline.text}</p>
            </div>
          </article>
        ))}
      </div>
    )}
  </main>
)

export default Main
