import { useState } from 'react'
import Todo from './components/todo.list'
function Layout() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        Hello world!
        <Todo />
      </div>

    </>
  )
}

export default Layout
