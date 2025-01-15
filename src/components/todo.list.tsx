// const Todo = () => {
//     return (
//         <div>
//             <h1>Todo List</h1>
//             <h2>Task 1</h2>
//         </div>
//     )


// }

import TodoData from "./todo.data";
const Todo = () => {
  const todos = [{ id: 1, task: "Task 1", completed: false }, { id: 2, task: "Task 2", completed: true }, { id: 3, task: "Task 3", completed: false }, { id: 4, task: "Task 4", completed: true }, { id: 5, task: "Task 5", completed: false }, { id: 6, task: "Task 6", completed: true }, { id: 7, task: "Task 7", completed: false }, { id: 8, task: "Task 8", completed: true }, { id: 9, task: "Task 9", completed: false }, { id: 10, task: "Task 10", completed: true }];
  return (
    <div>
      <TodoData todos={todos}
        owner={"Dangtan"}
        age={21}
        isDev={true}

      />
    </div>
  );
};
export default Todo;