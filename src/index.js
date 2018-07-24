import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

let contacts = {
    name: 'Nick',
    phone: '232-233-2323',
}

ReactDOM.render(<App contacts={contacts}/>, document.getElementById('root'));
registerServiceWorker();
