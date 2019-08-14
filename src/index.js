import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';  // App를 메인으로 보겠다.
import * as serviceWorker from './serviceWorker';

// 부트스트랩



ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
