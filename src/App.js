import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Posts from "./components/Posts";
import Footer from "./components/Footer";
import NotPosts from "./components/NotPosts";
import NavBar from "./components/NavBar";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <header className="App-header">
          <Switch>
            <Route exact path="/" component={Posts} />
            <Route path="/NotPosts" component={NotPosts} />
          </Switch>
        </header>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
