import { useMemo } from "react"
import news from "./news.json"
import { Main, Side } from "./components"
import "./App.scss"
import Article from "../@types/Article"

interface HomePageData {
  mainFeaturedArticle: Article
  mainArticles: Article[]
  sideFeaturedArticle: Article
  sideArticles: Article[]
}

function App() {
  const { articles, homepage } = news
  const {
    mainFeaturedArticle,
    mainArticles,
    sideFeaturedArticle,
    sideArticles,
  } = useMemo(() => {
    try {
      const mainSelections = homepage.main.selection
      const sideSelections = homepage.side.selection

      return {
        mainFeaturedArticle: articles.find(
          (article) => homepage.main.featured === article.id
        ),
        sideFeaturedArticle: articles.find(
          (article) => homepage.side.featured === article.id
        ),
        mainArticles: mainSelections.map((selection) => {
          const article = articles.find(
            (article) => selection.id === article.id
          )
          return {
            ...article,
            id: selection.id,
            hideImage: selection["hideImage"],
          }
        }),
        sideArticles: sideSelections.map((selection) => {
          const article = articles.find(
            (article) => selection.id === article.id
          )
          return {
            ...article,
            id: selection.id,
            hideImage: selection["hideImage"],
          }
        }),
      }
    } catch (e) {
      console.log(e)
      return
    }
  }, [])

  return (
    <div className="app">
      <div className="wrapper logo">
        <h1>The Daily News</h1>
      </div>
      <div className="layout-wrapper">
        <Main featured={mainFeaturedArticle} articles={mainArticles} />
        <Side featured={sideFeaturedArticle} articles={sideArticles} />
      </div>
    </div>
  )
}

export default App
