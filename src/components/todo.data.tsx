interface IProps {
    todos: {
        id: number,
        task: string,
        completed: boolean
    }[]
    owner: string;
    age: number;
    isDev: boolean;
}


const TodoData = (props: IProps) => {
    const { todos } = props;
    return (
        <div>
            {todos.map(todo => {
                return (
                    <div key={todo.id}>
                        <h2>{todo.task}</h2>
                        <p>{todo.completed ? "Completed" : "Not Completed"}</p>
                    </div>
                )
            })}
        </div>
    )


}
export default TodoData