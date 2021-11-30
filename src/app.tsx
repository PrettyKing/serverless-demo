import React from 'react'
import ReactDOM from 'react-dom'
import App from './pages/App'
import PageErrorFallback from './libs/BeautifulError'
import ErrorBoundary from './libs/ErrorBoundary'

ReactDOM.render(
  <ErrorBoundary fallbackRender={PageErrorFallback}>
    <App />
  </ErrorBoundary>,
  document.getElementById('root'),
)
