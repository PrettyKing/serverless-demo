import { VFC } from 'react';
import inject from './inject';

type YDProps = {
  msg: string;
  data: number;
};

const Demo2: VFC<YDProps> = (props: YDProps) => {
  const { msg } = props;
  return <h1>msg</h1>;
};
const Demo = inject(Demo2, { msg: 'demo' });
export default Demo2;
