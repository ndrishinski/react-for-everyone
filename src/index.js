import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

let contacts = [{
    id: 1,
    name: 'Nick',
    phone: '232-233-2323',
},
{
    id: 2,
    name: 'Jimmy',
    phone: '232-333-2323',
},
{
    id: 3,
    name: 'Choo',
    phone: '232-233-2323',
},
{
    id: 4,
    name: 'Nemy',
    phone: '232-233-2323',
},
{
    id: 5,
    name: 'Scott',
    phone: '232-233-8484'
}
]

ReactDOM.render(<App contacts={contacts}/>, document.getElementById('root'));
registerServiceWorker();
