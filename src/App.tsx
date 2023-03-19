import { useMemo } from "react"
import news from "./news.json"
import { Main, Side } from "./components"
import "./App.scss"

interface Article {
  id: string
  byline: {
    text: string
  }
  head: string
  teaser: string
  image?: string
  hideImage?: boolean
}

interface HomePageData {
  mainFeaturedArticle: Article | undefined
  mainArticles: Article[]
  sideFeaturedArticle: Article | undefined
  sideArticles: Article[]
}

function App() {
  const { articles, homepage } = news
  const data: HomePageData = useMemo(() => {
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
        <Main
          featured={data.mainFeaturedArticle}
          articles={data.mainArticles}
        />
        <Side
          featured={data.sideFeaturedArticle}
          articles={data.sideArticles}
        />
      </div>
    </div>
  )
}

export default App
