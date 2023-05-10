import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';//ays componenty kmiacni redux y react i naxadryalnerin ev chi entarki popoxutyan
import { store } from './redux/Store';

const root = ReactDOM.createRoot(document.getElementById('root'));
// patetum enq mer naxadryalnery Provider i mej 
root.render(
    <Provider store={store}>
        <App />
    </Provider>
);


// Provider y kanchvum e react-redux i gradaranic vori store hatkutyany veragrum enq mer staxcac story
// u Provider ov patatum enq mer glxavor komponenty (App)