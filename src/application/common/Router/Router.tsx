import React, { Fragment, FunctionComponent } from 'react'
import { Route, Routes } from 'react-router-dom'

import routesMapper from 'src/application/common/Router/utils/routesMapper'

const ViteRouter: FunctionComponent = () => {
  const routes = routesMapper(import.meta.globEager('/src/views/**/[a-z]*.tsx'))

  return (
    <Routes>
      {routes.map(({ path, component: Component = Fragment }) => (
        <Route
          key={path}
          path={path}
          element={<Component />}
        />
      ))}
    </Routes>
  )
}

export default ViteRouter
