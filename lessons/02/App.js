// const Pet = (props) => {
//     return React.createElement("div",{},[
//             React.createElement("h1",{}, "Muchu"),
//             React.createElement("h2",{}, "Cat"),
//             React.createElement("h2",{}, "eats sweets"),
//         ]);
// };


// const App = () => {
//     return React.createElement( "div", {},[
//             React.createElement("h1", {},"Adopt Me"),
//             React.createElement(Pet),
//             React.createElement(Pet),
//             React.createElement(Pet),
//         ]);
// };

// ReactDOM.render(React.createElement(App),document.getElementById("root"));



const Pet = (props) => {
    return React.createElement("div",{},[
            React.createElement("h1",{}, props.name),
            React.createElement("h2",{}, props.animal),
            React.createElement("h2",{}, props.breed),
        ]);
};


const App = () => {
    return React.createElement( "div", {},[
            React.createElement("h1", {},"Adopt Me"),
            React.createElement(Pet, {
                name: "Muchu",
                animal: "Cat",
                breed: "skotish",
            }),
            React.createElement(Pet, {
                name: "Barsik",
                animal: "Cat",
                breed: "local",
            }),
            React.createElement(Pet, {
                name: "Malu",
                animal: "Dog",  
                breed: "mix",
            }),
        ]);
};

ReactDOM.render(React.createElement(App),document.getElementById("root"));

 