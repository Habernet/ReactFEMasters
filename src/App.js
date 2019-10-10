import React from "react";
import { render } from "react-dom";
import SearchParams from "./SearchParams";

//Create your App "stamp"
const App = () => {
  return (
    <div>
      <h1>Adopt Me!</h1>
      <SearchParams />
    </div>
  );
};

// Use your "stamp" and render it to the page
render(<App />, document.getElementById("root"));
