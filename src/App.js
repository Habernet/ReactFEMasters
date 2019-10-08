const Pet = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Zoey"),
    React.createElement("h2", {}, "Dog"),
    React.createElement("h2", {}, "Golden Doodle")
  ]);
};

//Create your App "stamp"
const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet),
    React.createElement(Pet),
    React.createElement(Pet)
  ]);
};

// Use your "stamp" and render it to the page
ReactDOM.render(React.createElement(App), document.getElementById("root"));
