// 实现一个useRequest函数，参数如下：
// useRequest(api, params, options)
// api是一个函数，泛型，签名为(params: T) => Promise<T>
// params按照API的签名，取API中的参数类型
// options是一个对象，有以下2个属性：
//   defaultValue：请求未返回时的默认响应
//   throwError：布尔值，为true的时候遇到异常就直接throw，为false的时候返回异常，可选，不传的时候等于false
// options参数可选，默认为{throwError: false}
//
// 根据options的不同，返回值会出现以下情况：
// {defaultValue: T, throwError: true} -> {state: 'pending', data: T} | {state: 'hasValue', data: T}，此时无论请求是否结束，都可以拿到data，未结束时为defaultValue的值
// {throwError: true} -> {state: 'pending'} | {state: 'hasValue', data: T}，此时响应未结束只有state是pending，不能访问data属性
// {defaultValue: T, throwError: false} -> {state: 'pending', data: T} | {state: 'hasValue', data: T} | {state: 'hasError', error: Error}，此时与第一种情况类似，在pending或hasValue时都有data，请求失败时不抛出异常，会返回state为hasError且有error属性的对象
// {throwError: false} -> {state: 'pending'} | {state: 'hasValue', data: T} | {state: 'hasError', error: Error}，与第三种情况类似，但在pending的时候没有data

// export const useRequest...

import { useState, useEffect } from 'react';

interface ApiType<P, T> {
  (params: P): Promise<T>;
}

interface OptionsType<T> {
  defaultValue?: T;
  throwError: boolean;
}

enum State {
  Pending = 'pending',
  Resolve = 'hasValue',
  Reject = 'hasError',
}

type ResponseType<T> = {
  state: State,
  data?: T,
  error?: Error
};

function useRequest<P, T>(
  api: ApiType<P, T>,
  params: keyof ApiType<P, T>,
  options: OptionsType<T> = { throwError: false },
): ResponseType<T> {
  const { defaultValue, throwError } = options;
  const initState = defaultValue
    ? { state: State.Pending, data: defaultValue }
    : { state: State.Pending };
  const [response, setResponse] = useState<ResponseType<T>>(initState);

  useEffect(
    () => {
      (async () => {
        try {
          const data = await api(params);
          setResponse({ state: State.Resolve, data });
        } catch (e) {
          if (throwError) {
            throw e;
          } else {
            setResponse({ state: State.Reject, error: e });
          }
        }
      })();
    },
    [api, params, throwError],
  );
  return response;
}

export default {
  useRequest,
};
