import { lazy } from "navi"
import * as React from "react"
import * as ReactDOM from "react-dom"
import { Router as RouterProvider, View } from "react-navi"
import { Primary as Layout } from "./layouts/Primary"
import { routes } from "./routes"
import { ThemeProvider } from "./theme"
import { GraphqlProvider } from "~io/graphql"

const App: React.FC = () => {
  return (
    <GraphqlProvider>
      <RouterProvider routes={routes}>
        <ThemeProvider>
          <Layout>
            <React.Suspense fallback={null}>
              <View />
            </React.Suspense>
          </Layout>
        </ThemeProvider>
      </RouterProvider>
    </GraphqlProvider>
  )
}

ReactDOM.render(<App />, document.getElementById("root"))
