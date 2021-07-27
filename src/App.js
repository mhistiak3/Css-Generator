import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {
  About,
  Contact,
  Home,
  MyNavbar,
  Docs,
  Footer,
  AllProperty,
  BoxShadow,
  Filter,
  TextShadow,
  BorderRadius
} from "./component";
import { GlobalStyle } from "./component/GlobalStyle";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <MyNavbar />
      <Switch>
        {/* ============ Pages Route ========== */}
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/property" component={AllProperty} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/documentation" component={Docs} />

        {/* ============ Property Route Route ========== */}
        <Route exact path="/property/box-shadow" component={BoxShadow} />
        <Route exact path="/property/filter" component={Filter} />
        <Route exact path="/property/text-shadow" component={TextShadow} />
        <Route exact path="/property/border-radius" component={BorderRadius} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
