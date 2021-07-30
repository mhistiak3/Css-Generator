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
  BorderRadius,
  Rgba,
  Gradient
} from "./component";
import { GlobalStyle } from "./component/GlobalStyle";

let data = [
  {
    slug: "box-shadow",
    component: BoxShadow,
  },
  {
    slug: "filter",
    component: Filter,
  },
  {
    slug: "text-shadow",
    component: TextShadow,
  },
  {
    slug: "border-radius",
    component: BorderRadius,
  },
  {
    slug: "rgba",
    component: Rgba,
  },
  {
    slug: "Gradient",
    component: Gradient,
  },
];

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
        {data.map((singleData,index) => (
          <Route key={index} exact path={`/property/${singleData.slug}`} component={singleData.component} />
        ))}
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
