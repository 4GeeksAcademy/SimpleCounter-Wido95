//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import "../styles/index.css";
import propTypes from "prop-types";

//import your own components
function SimpleCounter(props){
    return (<div className="bigCounter">
    <div className="calendar">
    <i className="far fa-clock"></i>
    </div>
    <div className="four">{props.digitFour % 10}</div>
    <div className="three">{props.digitThree % 10}</div>
    <div className="two">{props.digitTwo % 10}</div>
    <div className="one">{props.digitOne % 10}</div>
    </div>);
}
SimpleCounter.propTypes={
    digitFour: propTypes.number,
    digitThree: propTypes.number,
    digitTwo: propTypes.number,
    digitOne: propTypes.number,
};


let counter = 0;
setInterval(function(){
    let four = Math.floor(counter/1000); 
    let three = Math.floor(counter/100); 
    let two = Math.floor(counter/10); 
    let one = Math.floor(counter/1);
     console.log(four,three, two, one);
     counter++;
     ReactDOM.render(
    <SimpleCounter digitOne={one} digitTwo={two} digitThree={three} digitFour={four} />, 
document.querySelector("#app")
);
}, 1000);