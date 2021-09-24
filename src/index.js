import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { ProductsProvider } from './context/products_context'
import { FilterProvider } from './context/filter_context'
import { CartProvider } from './context/cart_context'
import { UserProvider } from './context/user_context'
import { Auth0Provider } from '@auth0/auth0-react'

//dom
//dev-xclfuzhv.us.auth0.com
//id
//taxCD1BLy8NuAAdgfQ7QgXyAzevqiRqu
//sec
//AWr8PFV24bU4ZgXYar0y5gaShTl21YnkCa-4flj5FdJRugfJGdRXsU4LYsqnHQgh

ReactDOM.render(
  <Auth0Provider
    domain='dev-xclfuzhv.us.auth0.com'
    clientId='taxCD1BLy8NuAAdgfQ7QgXyAzevqiRqu'
    redirectUri={window.location.origin}
    cacheLocation='localstorage'
  >
    <UserProvider>
      <ProductsProvider>
        <FilterProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </FilterProvider>
      </ProductsProvider>
    </UserProvider>
  </Auth0Provider>,
  document.getElementById('root')
)
