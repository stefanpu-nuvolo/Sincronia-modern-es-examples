import React from "react";
import ReactDOM from "react-dom";

import ResultDisplay from "./components/ResultDisplay";

const App = () => {
  return (
    <React.Fragment>
      <h1>Object properties as keywords</h1>
      <ResultDisplay></ResultDisplay>
    </React.Fragment>
  );
};

(function() {
  ReactDOM.render(<App />, document.getElementById("react-root"));
})();
