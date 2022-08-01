const Person = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("p", {}, props.occupation),
  ]);
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "React is Rendered.."),
    React.createElement(Person, { name: "Rajveer", occupation: "School" }, []),
    React.createElement(Person, { name: "Ranjit", occupation: "Learner" }, []),
  ]);
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
