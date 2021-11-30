import { test } from '../tools/helper'

import React, { lazy, ReactNode, Suspense } from 'react'
import { Route, RouteProps, Switch } from 'react-router-dom'
import Loading from '../libs/Loading'
import Home from '../components/Home'
import StorageDemo from '../components/Storage'

test()
const Demo = lazy(() => import('../components/Demo/index'))

interface IRouterProps extends RouteProps {
  auth?: string
}

const routesArr: IRouterProps[] = [
  {
    component: Home,
    path: '/',
    exact: true,
  },
  {
    component: Demo,
    path: '/demos/:id',
    exact: true,
  },
  {
    component: StorageDemo,
    path: '/store',
    exact: true,
  },
]

const Routes = (): ReactNode => (
  <Suspense fallback={<Loading />}>
    <Switch>
      {routesArr.map((r, index) => {
        const rKey = `route-${index}`
        const { component, path, exact } = r
        const LazyCom = component!
        return (
          <Route
            key={rKey}
            path={path}
            exact={exact}
            render={(props) => <LazyCom {...props} />}
          ></Route>
        )
      })}
    </Switch>
  </Suspense>
)

export default Routes
