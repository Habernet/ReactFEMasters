import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

//Create your App "stamp"
const App = () => {
  // return React.createElement("div", {}, [
  //   React.createElement("h1", {}, "Adopt Me!"),
  //   React.createElement(Pet, {
  //     name: "Zoey",
  //     animal: "dog",
  //     breed: "Golden Doodle"
  //   }),
  //   React.createElement(Pet, { name: "Maya", animal: "dog", breed: "Mutt" }),
  //   React.createElement(Pet, { name: "Evee", animal: "cat", breed: "Tabby" })
  // ]);
  return (
    <div>
      <h1>Adopt Me!</h1>
      <Pet name="Zoey" animal="dog" breed="Golden doodle" />
      <Pet name="Maya" animal="dog" breed="Mutt" />
      <Pet name="Evee" animal="cat" breed="Tabby" />
    </div>
  );
};

// Use your "stamp" and render it to the page
render(<App />, document.getElementById("root"));
