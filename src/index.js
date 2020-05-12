import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'
import Task from './containers/taskPage';

const store = configureStore()

render(
  <Provider store={store}>
    <Task/>
  </Provider>,
  document.getElementById('root')
)