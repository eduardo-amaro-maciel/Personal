import { GlobalStyle, theme } from "./styles/GlobalStyle"
import { ThemeProvider } from "styled-components"

import RoutesApp from "./routes"

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle/>
      <RoutesApp/>
    </ThemeProvider>
  )
}

export default App