import React, { FunctionComponent } from "react"

import AppProvider from "src/application/common/providers/AppProvider"
import QueryProvider from "src/application/common/providers/QueryProvider"
import RouterProvider from 'src/application/common/providers/RouterProvider'

import Layout from "src/infrastructure/components/Layout"

const App:FunctionComponent = () => {
  return (
    <QueryProvider>
     <AppProvider>
      <Layout>
        <RouterProvider />
      </Layout>
      </AppProvider>
    </QueryProvider>
  )
}

export default App
