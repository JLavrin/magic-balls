import React, { FunctionComponent } from "react"

import AppProvider from "src/application/common/providers/AppProvider"
import QueryProvider from "src/application/common/providers/QueryProvider"
import RouterProvider from 'src/application/common/providers/RouterProvider'

const App:FunctionComponent = () => (
  <QueryProvider>
    <AppProvider>
      <RouterProvider />
    </AppProvider>
  </QueryProvider>
)


export default App
