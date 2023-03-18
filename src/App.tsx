import "./App.css";
import news from "./news.json";

function App() {
  const { articles } = news;

  return (
    <div className="App">
      <div>
        <h1>The Daily News</h1>
        {articles.map((article) => (
          <>
            <p>{JSON.stringify(article)}</p>
            <img height="200" src={`images/${article.image}`} />
          </>
        ))}
      </div>
    </div>
  );
}

export default App;
