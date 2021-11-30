import React, { ReactNode } from 'react'

// 强制的外部能传递已经通过inject参数
function inject<TProps, TinjectKeys extends keyof TProps>(
  Component: React.JSXElementConstructor<TProps>,
  injector: Pick<TProps, TinjectKeys>,
) {
  return function Injected(props: Omit<TProps, TinjectKeys>): ReactNode {
    // eslint-disable-next-line react/jsx-props-no-spreading
    return <Component {...(props as TProps)} {...injector} />
  }
}

export default inject
