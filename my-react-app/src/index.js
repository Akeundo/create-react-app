import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

//import * as serviceWorker from './serviceWorker';

const customStyle = {
    'color' : 'red',
    'backgroundColor' : 'aqua',
};

/*const helloMessage = React.createElement (
    'div', // name of the html element to be created
    //null, = properties to be added e.g id, classes
    {id= 'parent'}
    React.createElement(
        'h1',
        {id: 'child', style: customStyle},
        'Hello World from Child'
    )
);
    //'Hello World 2' = content of the element


ReactDOM.render(
    helloMessage,
//<h1> Hello People</h1>,
document.getElementById('root'));



const helloMessage = <div>
    <img src="./images/londo.jpg"></img>
    <h4>Akeundo</h4>
     <div style= {customStyle}>64 likes</div>
</div>


const helloMessage = React.createElement (

    'div',
    null'
    [
        React.createElement (
            'img',
        {
            key: 0,
            src : './images/london.jpg'
        }
        )
    ]
)
ReactDOM.render(
    helloMessage,
    document.getElementById('root'));

    // more codes missing
    */



    //using customised content

    class helloMessage extends React.Component {
        render() {
            return (
                <div class="btn">
                    <h1>Hello from React Component</h1>
                </div>
            )
        }
    }

    ReactDOM.render(
       < helloMessage/>,
       document.getElementById('root')
    );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
