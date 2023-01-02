import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter } from 'react-router-dom'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'
import { ThemeProvider } from 'styled-components'
import { Router } from './Router'
import { OrdersProvider } from './contexts/useCoffeeOrders'


function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <OrdersProvider>
          <Router />
        </OrdersProvider>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
    
  )
}

export default App
