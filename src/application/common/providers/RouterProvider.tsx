import { FunctionComponent } from 'react'
import { BrowserRouter } from 'react-router-dom'

import Router from 'src/application/common/Router'

const RouterProvider: FunctionComponent = () => (
  <BrowserRouter>
    <Router />
  </BrowserRouter>
)

export default RouterProvider
