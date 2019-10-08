const Pet = ({ name, animal, breed }) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, name),
    React.createElement("h2", {}, animal),
    React.createElement("h2", {}, breed)
  ]);
};

//Create your App "stamp"
const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, {
      name: "Zoey",
      animal: "dog",
      breed: "Golden Doodle"
    }),
    React.createElement(Pet, { name: "Maya", animal: "dog", breed: "Mutt" }),
    React.createElement(Pet, { name: "Evee", animal: "cat", breed: "Tabby" })
  ]);
};

// Use your "stamp" and render it to the page
ReactDOM.render(React.createElement(App), document.getElementById("root"));
