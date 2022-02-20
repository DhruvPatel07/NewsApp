import "./App.css";
import React, { useState } from "react";
import NavBar from "./components/NavBar";
import News from "./components/News";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

const App = () => {
  const [progress, setProgress] = useState(0);

  return (
    <>
      <Router>
        <NavBar />
        <LoadingBar height={2} color="#f11946" progress={progress} />
        <Switch>
          <Route exact path="/">
            <News
              setProgress={setProgress}
              key="general"
              pageSize={6}
              country="in"
              category="General"
            />
          </Route>

          <Route exact path="/business">
            <News
              setProgress={setProgress}
              key="business"
              pageSize={6}
              country="in"
              category="Business"
            />
          </Route>

          <Route exact path="/entertainment">
            <News
              setProgress={setProgress}
              key="entertainment"
              pageSize={6}
              country="in"
              category="Entertainment"
            />
          </Route>

          <Route exact path="/sports">
            <News
              setProgress={setProgress}
              key="sports"
              pageSize={6}
              country="in"
              category="Sports"
            />
          </Route>

          <Route exact path="/technology">
            <News
              setProgress={setProgress}
              key="technology"
              pageSize={6}
              country="in"
              category="Technology"
            />
          </Route>

          <Route exact path="/science">
            <News
              setProgress={setProgress}
              key="science"
              pageSize={6}
              country="in"
              category="Science"
            />
          </Route>

          <Route exact path="/health">
            <News
              setProgress={setProgress}
              key="health"
              pageSize={6}
              country="in"
              category="Health"
            />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;
