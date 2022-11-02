const routesMapper = (routes: any) =>
  Object.keys(routes).map((route) => {
    const path = route
      .replace(/\/src\/pages|\/index|\.tsx$/g, '')
      .replace(/\[\.{3}.+\]/, '*')
      .replace(/(?<=\[)(.*?)(?=\])/g, ':$1')
      .replace(/[\[\]]/g, '')
    return { path, component: routes[route].default }
  })


export default routesMapper
