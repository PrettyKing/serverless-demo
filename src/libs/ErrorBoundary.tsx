/**
 * 1.JSX.Element 这么写不好 不能接受数组
 * 2.JSX.Element | JSX.Element[] 不能接受一个string
 * 3.React.ReactChildren 只是名字刚好用到 但是
 * 4.React.ReactChild[]
 * 5.React.ReactNode 所有的官方React能够吐的节点
 * const xChildren = (name:string)=>React.ReactNode
 */

import { Component, ErrorInfo, ReactNode, ReactElement } from 'react'

interface Props {
  children: ReactNode
  fallbackRender: ({ error }: { error: Error | null }) => ReactElement
}

interface State {
  hasError: boolean
}

class ErrorBoundary extends Component<Props, State> {
  // public state: State;
  constructor(props: Props) {
    super(props)
    this.state = {
      hasError: false,
    }
  }

  // 当子组件抛出异常 这里会接收到并且调用
  public static getDerivedStateFromError(_: Error): State {
    console.log('🍌', _)
    return { hasError: true }
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    // 嵌入SDK
    console.error('报告错误🧓', error, errorInfo)
  }

  // 对外的render必须增加一个返回值
  public render(): ReactNode {
    const { children, fallbackRender } = this.props
    const { hasError } = this.state
    if (hasError) {
      //   return <h1>不好意思，系统错误❎</h1>;
      return fallbackRender({ error: new Error('系统组件出错') })
    }
    return children
  }
}

export default ErrorBoundary
