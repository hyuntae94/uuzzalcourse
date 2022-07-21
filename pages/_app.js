import { Provider } from 'react-redux'

import '../styles/globals.css'

import Layout from '../components/Layout.js'
import store from '../data/store.js'

function MyApp({ Component, pageProps }) {
  
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  )
}

export default MyApp
