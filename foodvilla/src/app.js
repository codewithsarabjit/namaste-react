import React from 'react';
import ReactDOM from 'react-dom/client';
/*
const heading = React.createElement("h1", {}, "Hello World from React");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
*/

/**create  a nested header element  using React.createElement inside a div with class title */
/*
const heading1 = React.createElement("h1", {id: "h1"}, "H1");
const heading2 = React.createElement("h2", {id: "h2"}, "H2");
const heading3 = React.createElement("h3", {id: "h3"}, "H3");
const div = React.createElement("div", {id: "div", class: "title"}, [heading1, heading2, heading3]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(div);
/*

/**create same element using JSX */
/*
const div = (
    <div className='title'>
        <h1>H1</h1>
        <h2>H2</h2>
        <h3>H3</h3>
    </div>
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(div);
*/

/**create functional component of the same JSX */
/*
const TitleComponent = () => {
    return (
        <div className='title' id="titleDiv">
            <h1>H1</h1>
            <h2>H2</h2>
            <h3>H3</h3>
        </div>
    );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<TitleComponent />);
*/

/**composition of component / add a component inside another */
/*
const H1Tag = () => <h1>h1</h1>;
const H2Tag = () => <h2>h2</h2>;
const H3Tag = () => <h3>h3</h3>;
const TitleComponent = () => {
    return (
        <div className='title' id="titleDiv" key="div">
            <H1Tag title="H1" key="h1" />
            <H2Tag title="H2" key="h2" />
            <H3Tag title="H3" key="h3" />
        </div>
    );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<TitleComponent />);
*/

/**Create a Header component from scratch including logo, search, user icon, css to make it look nice */
const Logo = () => <h2>LOGO HERE</h2>;
const Search = () => <input name="search" placeholder="Search here" />;
const UserIcon = () => <img width="20" src="https://static.vecteezy.com/system/resources/previews/008/442/086/original/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg" />;
const HeaderComponent = () => {
    return (
        <div className='header' key="div" style={{float: "left", width: "100%", backgroundColor: "yellow"}}>
            <Logo key="logo" style={{float: "left", width: "30%"}} />
            <Search key="search" style={{"margin-left": "30%", width: "60%"}} />
            <UserIcon key="usericon" style={{float: "right", width: "10%" }} />
        </div>
    );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeaderComponent />);