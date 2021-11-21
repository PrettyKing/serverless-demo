// 这里是react components的 类型说明

// 1.根据经验用关键字猜
// 2.看pakage.json中的声明文件
// 3.vscode提示
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

  //-----ts操作符基础篇-----
// typeof和instanceof：查询具体JS对象的类型 、查询实体类的类型
// keyof: 获取对象的key。keyof T是一个运算符，用于告诉您k可以使用哪些值obj[k]。
// O[K]: 属性查找
// [K in O]: 映射类型 -- obj = {a=1.b=2} a,b
// + - readonlyor ?  -?去掉只读
// x ? Y : Z：泛型类型、类型别名、函数参数类型的条件类型
// ! 原本他可能是空的 但是被我们强制转换了
// =  泛型类型参数默认为泛型 T = nerver
// as: 类型断言
// is: 函数返回类型的类型保护

//-------TS常见的帮助类型-------
// ConstructorParameters: 类构造函数的参数类型的元组
// Exclude: 从另一种类型中排除一种类型
// Extract: 选择可分配给另一种类型的子类型
// InstanceType: 从new类构造函数中获得的实例类型
// NonNullable: exclude nulland undefinedfrom a type
// Parameters: 函数参数类型的元组
// Partial: 将对象中的所有属性设为可选
// Readonly: 使对象中的所有属性只读
// ReadonlyArray: 制作给定类型的不可变数组
// Pick：对象类型的子类型及其键的子集
// Record: 从键类型到值类型的映射
// Required: 使对象中的所有属性成为必需
// ReturnType: 函数的返回类型

//--------react进阶类型1--------
// Component - 组件类基类
// PureComponent - 所有基于类的优化组件的基类
// FC, FunctionComponent- 功能组件的完整接口，常用于键入外部组件而不是键入自己的
// CSSProperties - 用于样式的类

//--------react进阶类型2--------
// Ref - 用来打字 innerRef
// JSXElementConstructor - 任何 TypeScript 认为是有效的东西，可以进入 JSX 表达式的开始标签
// ElementType- 用于高阶组件或对组件的操作，例如多态组件
// ReactElement-他是被传递包装的组件
// ComponentType - 高阶组件包装
// ComponentProps- 组件的道具 - 对于包装/镜像 HTML 元素最有用
// ReactPortal - 如果你特别需要输入一个道具作为门户，则使用，否则它是的一部分 ReactNode

//--------react进阶类型3 表单事件类型--------
// AnimationEvent CSS动画。
// ChangeEvent 更改<input>,<select>和<textarea>element的值。
// ClipboardEvent 使用复制、粘贴和剪切事件。
// CompositionEvent 由于用户间接输入文本而发生的事件
// DragEvent
// FocusEvent
// FormEvent
// InvalidEvent <input type="number" max="10"></input> 100
// KeyboardEvent
// MouseEvent
// PointerEvent
// TouchEvent
// TransitionEvent
// UIEvent
// WheelEvent
// SyntheticEvent react事件合成引擎 基于它二次构建
