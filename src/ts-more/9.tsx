import React, { ComponentPropsWithoutRef, CSSProperties } from 'react';

export interface ButtonProps extends ComponentPropsWithoutRef<'button'> {
  specialProp?: string;
}

function Button(props: ButtonProps) {
  const { specialProp, ...rest } = props;
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <button type="button" {...rest} />;
}
const divStyle: CSSProperties = {
  width: '100px',
};
const Box = (props: CSSProperties) => <div style={props} />;
export default function App(): JSX.Element {
  return (
    <>
      <Button type="button">测试按钮</Button>
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <Box {...divStyle} />
    </>
  );
}
