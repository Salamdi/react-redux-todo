import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './index.css'
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux'
import store from './store'
import { BrowserRouter, Route } from 'react-router-dom'

ReactDOM.render(
    <Provider store={ store } >
        <BrowserRouter>
            <Route path='/' component={App} />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
