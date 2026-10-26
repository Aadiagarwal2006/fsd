//const div = document.getElementById("root");

//const h1 = document.getElementById("h1");

//h1.innerText = "welcome ";
// div.appendChild(h1);

const root = ReactDOM.createRoot(document.getElementById("rooot"));
const h1 = React.createElement("h1", {}, "welcome");
const div = React.createElement("div", {}, [React.createElement("span", { className: "div-1" }, "1"), React.createElement("span", {}, "2")]);
root.render(h1);