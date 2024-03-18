
const parent  = React.createElement(
    "div",{id:"parent"},
    [React.createElement("div",{id : "child1"},
       [React.createElement("h1",{},"Hello am from child1 :h1"),
        React.createElement("h6",{},"Hello am from child1 :h6")]
    ),
    React.createElement("div",{id : "child2"},
       [React.createElement("h1",{},"Hello am from child2 :h1"),
        React.createElement("h6",{},"Hello am from child2: h6")]
    )]

);



//const heading = React.createElement("h1", {id:"heading"}, "Hello World from React !!!");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);