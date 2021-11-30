import React, { VFC } from 'react';

type PageErrorProps = {
  error: Error | null
};

const PageErrorFallback:VFC<PageErrorProps> = (props:PageErrorProps) => {
  const { error } = props;
  return <span>{error?.message}</span>
};
export default PageErrorFallback;
