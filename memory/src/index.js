import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

//const Greeter =({whom})=>(
 //   <button onClick={()=>alert(`SAlut ${whom}!`)}>cliquez !</button>
//)

ReactDOM.render(<App />,document.getElementById('root'));
registerServiceWorker();
