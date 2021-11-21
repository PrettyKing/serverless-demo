// 1.根据经验用关键字猜
// 2.看pakage.json中的声明文件
// 3.scode提示
// 4.官方的ghithub demo

type AppProps = {
    onSomething: Function;
    onClick: () => void;
    onClick2: (e: MouseEvent) => void;
    onClick3(event: React.MouseEvent<HTMLButtonElement>): void;
  };
  
  type Props = {
    msg: string;
  };
  interface AppProps2 {
    children1: JSX.Element; //不考虑数组 React.createElement
    children2: JSX.Element | JSX.Element[]; //一些特殊比如数字字符
    children3: React.ReactChildren; //不是一个类型 应用程序
    children4: React.ReactChild[]; //稍微好一点 接受数组
    children5: React.ReactNode; //最好的了 常规代码
    style?: React.CSSProperties;
    onChange?: React.FormEventHandler<HTMLInputElement>;
    //ref 不转发
    props: Props & React.ComponentPropsWithoutRef<'button'>;
    //   props2: Props & React.ComponentPropsWithRef<MyButtonWithForwardRef>;
  }