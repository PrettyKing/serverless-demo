function test(): void {
  console.log('测试共用包')
}
function tuplify<T extends unknown[]>(...elements: T): T {
  return elements
}
export { test, tuplify }
