import "./App.scss"
import news from "./news.json"
import { Main, Side } from "./components"

function App() {
  const { articles, homepage } = news
  const mainFeaturedArticle = articles.find(
    (article) => homepage.main.featured === article.id
  )

  return (
    <div className="app">
      <div className="wrapper">
        <h1>The Daily News</h1>
      </div>
      <div className="layout-wrapper">
        <Main featured={mainFeaturedArticle} articles={articles.slice(1, 4)} />
        <Side
          featured={homepage.side.featured}
          articles={articles.slice(4, 8)}
        />
      </div>
    </div>
  )
}

export default App
