import React from 'react';
import ReactDOM from 'react-dom/client';
import { store } from './redux/store/store';
import { Provider } from 'react-redux';
import AppRoutes from './routes/AppRoutes';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <Provider store={store}>
           <AppRoutes/>
  </Provider>
 
  </React.StrictMode>

);


