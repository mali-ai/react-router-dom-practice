import "./App.css";
import Header from "./components/Header";
import Body from "./components/Body";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Movies from "./collections/Movies";
import MovieDetails from "./components/MovieDetails";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Body />} />
          <Route path="genres/:genreName" element={<Movies />}>
            <Route path=":movieName" element={<MovieDetails />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
