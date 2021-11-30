import React, { FC, useEffect } from 'react'
import useLocalStorage from '../../hooks/useLocalStorage'
import useAsyncTask from '../../hooks/useAsyncTask'

function myApiRequest(data: string) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const rnd = Math.random() * 10
      if (rnd <= 5) {
        resolve(`⏰${data}`)
      } else {
        reject(new Error('😭'))
      }
    }, 2000)
  })
}

const StorageDemo: FC = () => {
  const [name, setName] = useLocalStorage<string>('name', 'call me chalee')
  const task = useAsyncTask(async (data: string) => myApiRequest(data))

  useEffect(() => {
    console.log(task.status) // 'IDLE' | 'PROCESSING' | 'ERROR' | 'SUCCESS';
  }, [task.status])
  // const [response, error, isLoading] = useFetch("index.php");
  return (
    <>
      {/* {isLoading ? "...."}:{error ? xx : response} */}
      <span>{name}</span>
      <h2>{task.status}</h2>
      <button type="button" onClick={() => task.run('run starting')}>
        测试
      </button>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <h1>this is storage demo</h1>
    </>
  )
}

export default StorageDemo
