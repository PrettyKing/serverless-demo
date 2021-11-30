import React, { VFC } from 'react'
import { useParams, RouteComponentProps } from 'react-router-dom';

type DemoRouterProps = {id:string}
type IProps = {
  msg:string
}
type TestProps = IProps & DemoRouterProps
const Demo:VFC<TestProps> = (props:TestProps) =>{
  const {msg} = props
  const {id} = useParams<DemoRouterProps>()
  return <>
    <h1>this is demo page</h1>
    msg:{msg}
    <br />
    router value:{id}
  </>
}

export default Demo
