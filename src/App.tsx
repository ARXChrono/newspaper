import "./App.css";
import news from "./news.json";

function App() {
  const { articles } = news;

  return (
    <div className="App">
      <div>
        <h1>If the build is successful images will be rendered 👇</h1>
        {articles.map((article) => (
          <>
            <p>{JSON.stringify(article)}</p>
            <img height="200" src={`images/${article.image}`} />
            <hr />
          </>
        ))}
      </div>
    </div>
  );
}

export default App;
