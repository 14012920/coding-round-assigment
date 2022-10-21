import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home";
import PopularCardListing from "./PopularCardListing";
import Footer from "./Footer";
import Header from "./Header";
function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/PopularCardListing/:type">
            <PopularCardListing />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
