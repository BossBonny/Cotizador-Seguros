import { CotizadorProvider } from "./context/CotizadorProvider.jsx"
import AppSeguro from "./components/AppSeguro.jsx"


function App() {

  return (
    <CotizadorProvider>
      <AppSeguro/>
    </CotizadorProvider>
  )
}

export default App
