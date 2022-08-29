import React from 'react'
import { store } from './redux/store/store';
import { Provider } from 'react-redux';
import AppRoutes from './routes/AppRoutes';

export default function App() {
  return (
    <Provider store={store}>
      <AppRoutes/>
    </Provider>
  )
}
