import React, { component } from 'react';
//import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import './index.css';
import { checkPropTypes } from 'prop-types';

//import * as serviceWorker from './serviceWorker';

const customStyle = {
  color: 'red',
  backgroundColor: 'aqua',
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

class HelloMessage extends React.Component {
  render() {
    return (
      <div class="btn">
        <h1>Hello from React Component</h1>
      </div>
    );
  }
}

/*ReactDOM.render(
       < HelloMessage/>,
       document.getElementById('root')
    );

    class HelloMessage2 extends React.Component {
        render() {
            console.log(this.props)
            return (
                <div class="btn">
                    <h1>{this.props.msg}</h1>
                    <h2>{this.props.msg2}</h2>
                    
                </div>
            )
        }
    }

// creating a constant to hold the greeting messages


const greetingMessages ={
morning: 'Good morning',
afternoon: 'Good afternoon',
evening: 'Good evening'

};
    ReactDOM.render(
        < HelloMessage/>,
        document.getElementById('root')
     );
 
     class HelloMessage2 extends React.Component {
         render() {
             console.log(this.props)
             return (
                 <div class="btn">
                     <h1>{this.props.morningMessage}</h1>
                     <h2>{this.props.eveningMessage}</h2>
                     <h2>{this.props.afternoonMessage}</h2>
                     
                 </div>
             )
         }
     }

    ReactDOM.render(
       < HelloMessage2
       morningMessage={greetingMessages.morning}
       afternoonMessage={greetingMessages.afternoon}
       eveningMessage={greetingMessages.evening}
        />,
       document.getElementById('root2')
    );

//Further example

const greetingMessages ={
    morning: 'Good morning',
    afternoon: 'Good afternoon',
    evening: 'Good evening'
    
    };
    class HelloMessage2 extends React.Component {
        fetchGreetingMessage = time => {
            if (time <= 12) {
                return this.props.morningMessage;
            } else if (time <= 18) {
                return this.props.afternoonMessage;
            }else {
                return this.props.eveningMessage;

        }
    }

    render() {
        return (
            <div>
                <h1>{this.fetchGreetingMessage.time}</h1>
                <h1>The time now is {this.props.time}</h1>
            </div>
        )
    }
        
    ReactDOM.render(
        morningMessage={greetingMessages.morning}
       afternoonMessage={greetingMessages.afternoon}
       eveningMessage={greetingMessages.evening}
        document.getElementById('root2')
     );
     
        // using functions

        function fetchGreetingMessage (props) {
            if (time <= 12) {
                return this.props.morningMessage;
            } else if (time <= 18) {
                return this.props.afternoonMessage;
            }else {
                return this.props.eveningMessage;

        }

        function HelloMessage(props) {
            return <div>
                <h1>{ fetchGreetingMessage(props, props.timeNow)}</h1>
                <h1>The time now is {props.time}</h1>
            </div>
        }

        render (
            <HelloMessage
            morningMessage={greetingMessages.morning}
            afternoonMessage={greetingMessages.afternoon}
            eveningMessage={greetingMessages.evening}
            timeNow={hour}
            today={now}/>,
            document.getElementById('root2')
        );
*/
// Exercises solutions
const movieList = [
  { title: 'transformer', description: 'amazing', staring: 'actor 1' },
  { title: 'spiderman', description: 'wao', staring: 'actor 2' },
  { title: 'Passion of Christ', description: 'passionate', staring: 'actor 3' },
];

function Movie(props) {
  return (
    <div>
      <h2>{props.title}</h2>
      <p>{props.description}</p>
      <p>{props.staring}</p>
    </div>
  );
}

function Cinema(props) {
  return (
    <div>
      {props.movies.map((movie, index) => {
        //composing component
        return (
          <Movie
            key={index}
            title={movie.title}
            description={movie.description}
            staring={movie.staring}
          />
        );
      })}
    </div>
  );
}

render(<Cinema movies={movieList} />, document.getElementById('root2'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
