import { JSXElementConstructor, ReactNode } from 'react';

function inject<TProps, TinjectKeys extends keyof TProps>(
  Component: JSXElementConstructor<TProps>,
  injector: Pick<TProps, TinjectKeys>
) {
  return function Injected(props: TProps): ReactNode {
    return <Component {...props} {...injector} />;
  };
}

export default inject;
