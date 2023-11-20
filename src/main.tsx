import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import GlobalStyle from './styles/GlobalStyle.tsx'
import { Provider } from 'react-redux'
import { store } from './reduxs/store.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GlobalStyle>
      <Provider store={store}>
        <App/>
      </Provider>
    </GlobalStyle>
  </React.StrictMode>,
)
