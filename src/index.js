import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/app';

ReactDOM.render(<App/>, document.getElementById('root'))

/*

let Clock = (props) => {
    return (
        <div>
         <h1>Часы</h1>
         <h2>Сейчас {props.date.toLocaleTimeString()}</h2>
        </div>
    );
}

let func = ()=> {
    ReactDOM.render(<Clock date={new Date()}/>, document.getElementById('root'));
}


setInterval( func, 1000);

*/
