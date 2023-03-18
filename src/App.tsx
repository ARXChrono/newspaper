import "./App.scss";
import news from "./news.json";
import { Main, Side } from "./components";

function App() {
  const { articles } = news;

  return (
    <div className="app">
      <h1>The Daily News</h1>
      <div className="layout-wrapper">
        <Main />
        <Side />
      </div>
    </div>
  );
}

export default App;
