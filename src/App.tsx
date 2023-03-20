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
  }: HomePageData = useMemo(() => {
    const mainSelections = homepage.main.selection
    const sideSelections = homepage.side.selection
    const fallback = {
      id: "",
      byline: { text: "" },
      head: "",
      teaser: "",
      image: "",
    }
    return {
      mainFeaturedArticle:
        articles.find((article) => homepage.main.featured === article.id) ??
        fallback,
      sideFeaturedArticle:
        articles.find((article) => homepage.side.featured === article.id) ??
        fallback,
      mainArticles: mainSelections.map((selection) => {
        const article = articles.find((a) => selection.id === a.id) ?? fallback
        return {
          ...article,
          id: selection.id,
          hideImage: selection["hideImage"],
        }
      }),
      sideArticles: sideSelections.map((selection) => {
        const article = articles.find((a) => selection.id === a.id) ?? fallback
        return {
          ...article,
          id: selection.id,
          hideImage: selection["hideImage"],
        }
      }),
    }
  }, [articles, homepage])

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
