import React, { FunctionComponent, PropsWithChildren } from "react"
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const QueryProvider: FunctionComponent<PropsWithChildren> = ({ children }) => {
  const queryClient = new QueryClient()
  
  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  )
}

export default QueryProvider
