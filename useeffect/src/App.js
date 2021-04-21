import { useFetch } from "./useFetch";

import "./App.css";

function App() {
  const { data, loading } = useFetch("http://numbersapi.com/52/trivia");

  return (
    <>
      <h1>useEffect</h1>

      <div>{loading ? "loading..." : data}</div>
    </>
  );
}

export default App;
