import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import 'antd/dist/antd.css' // or 'antd/dist/antd.less'
import { Provider } from 'react-redux'
import configureStore from './redux/configureStore'
import Loading from './Components/Loading'
import { ToastContainer } from 'react-toastify'
import { BrowserRouter } from 'react-router-dom'
import { ConnectedRouter } from 'connected-react-router'
// import { history } from './utils/history'
const store = configureStore()
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Loading />
      <BrowserRouter>
        <App />
      </BrowserRouter>
      {/* <ConnectedRouter history={history}>
        <App />
      </ConnectedRouter> */}
      <ToastContainer />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
